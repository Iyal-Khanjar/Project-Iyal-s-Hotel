import React from "react";
import './navbar.css'


const Navbar = () => {

    return (
        <div className="nav">
            <div className="container">
                <div className='logo'>Iyal's <span>Hotel</span> </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Entertainment">Entertainment</a></li>
                        <li><a href="/Rooms">Book A Room</a></li>
                        <div className='loginAndRegister'>
                            <li><a href="/Login">Login</a></li>
                            <li><a href="/Register">Register</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;