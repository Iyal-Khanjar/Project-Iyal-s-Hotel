import './register.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [users, setUsers] = useState([])
    const [isRegisterd, setIsRegisterd] = useState(true)
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState('')

    useEffect(() => {
        axios.get('https://617fc944055276001774fc61.mockapi.io/users/')
            .then(res => {
                setUsers(res.data);
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let emailInclude = users.map(item => {
            return item.email
        })
        if (email.length === 0) {
            setEmailErrorMessage('Please Enter An Email')
            setTimeout(() => {
                setEmailErrorMessage('')
            }, 3000)
        } else if (password.length === 0) {
            setPasswordErrorMessage('Please Enter A Password')
            setTimeout(() => {
                setPasswordErrorMessage('')
            }, 3000)
        } else if (repeatPassword.length === 0) {
            setRepeatPasswordErrorMessage('Please Enter A Repeat Password')
            setTimeout(() => {
                setRepeatPasswordErrorMessage('')
            }, 3000)
        } else if (repeatPassword !== password) {
            setRepeatPasswordErrorMessage('It Is Not A Match')
            setTimeout(() => {
                setRepeatPasswordErrorMessage('')
            }, 3000)
        } else if (!emailInclude.includes(email)) {
            let usersEmails = await axios.post('https://617fc944055276001774fc61.mockapi.io/users/', { email: email, password: password })
            setUsers(usersEmails.data);
            setIsRegisterd(false)
        } else {
            setEmailErrorMessage('Email Is Already Registered')
            setTimeout(() => {
                setEmailErrorMessage('')
            }, 3000)
        }
    }


    return (<div>
        {
            isRegisterd ? <div className='allRegister'>
                <div div className='containerForAllRegister' >
                    <form >
                        <div className="container">
                            <h1>Sign Up</h1>
                            <p>Please fill in this form to create an account.</p>
                            <hr />

                            <label htmlFor="email"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '12px' }}>{emailErrorMessage}</span> <br />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => setPassword(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '12px' }}>{passwordErrorMessage}</span> <br />

                            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                            <input type="password" placeholder="Repeat Password" name="psw-repeat" onChange={(e) => setRepeatPassword(e.target.value)} />
                            <span style={{ color: 'red', fontSize: '12px' }}>{repeatPasswordErrorMessage}</span> <br />

                            <div className="clearfix">
                                <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
                            </div>
                        </div>
                    </form>

                </div >
            </div > : <div className='containerForRegisteringAccepted'>
                <p>Thanks for Registering You can now Login</p>
            </div>
        }



    </div>);
}

export default Register;