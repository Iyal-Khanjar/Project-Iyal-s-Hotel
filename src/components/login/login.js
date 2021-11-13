import './login.css'
import { useState, useRef } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Login = () => {
    const [allUsers, setAllUsers] = useState([])
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [wrongEmailOrPassword, setWrongEmailOrPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(true)


    const emailRef = useRef()
    const passwordRef = useRef()

    useEffect(() => {
        axios.get('https://617fc944055276001774fc61.mockapi.io/users/')
            .then(res => {
                setAllUsers(res.data)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempUser = allUsers.filter(item => item.email === emailRef.current.value && item.password === passwordRef.current.value)

        if (emailRef.current.value.length === 0) {
            setEmailErrorMessage('Please Enter An Email')
            setTimeout(() => {
                setEmailErrorMessage('')
            }, 3000)
        } else if (passwordRef.current.value.length === 0) {
            setPasswordErrorMessage('Please Enter A Password')
            setTimeout(() => {
                setPasswordErrorMessage('')
            }, 3000)
        } else if (!tempUser.length) {
            setWrongEmailOrPassword('Wrong Email Or Password')
            setTimeout(() => {
                setWrongEmailOrPassword('')
            }, 3000)
        } else if (tempUser.length) {
            setIsLoggedIn(false)
        }
    }

    return (<div>
        {isLoggedIn ?
            < div className='allLogin' >
                <div className='containerForAll'>
                    <form autoComplete='off' >
                        <h2>Login Form</h2>
                        <div className="containerLogin">
                            <label htmlFor="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" ref={emailRef} name="uname" />
                            <span style={{ color: 'red', fontSize: '12px' }}>{emailErrorMessage}</span> <br />

                            <label htmlFor="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" ref={passwordRef} name="psw" />
                            <span style={{ color: 'red', fontSize: '12px' }}>{passwordErrorMessage}</span> <br />
                            <span style={{ color: 'red', fontSize: '12px' }}>{wrongEmailOrPassword}</span> <br />
                            <button type="submit" onClick={handleSubmit}>Login</button>

                        </div>
                    </form>
                </div>
            </ div>
            : <div className='containerForLogginAccepted'>
                <p className='thanks'>Thanks You For Logging</p>
                <div>
                    <p className='finsihText'>
                        This is where i got for now at the future
                        I will add features that when the manger "admin",
                        loggin he can do a lot of stuff like delete a room
                        add another rooms It's type, price and maybe add resturant to the hotel
                        and the manger can add or delete stuff such like dishes change prices and so on...
                    </p>
                    <div className='thankYou'>Thank You</div>
                </div>
            </div>}
    </div>);


}

export default Login;