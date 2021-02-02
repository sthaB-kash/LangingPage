import React from 'react'
import HomePage from './homepage/home'
import NavBar from './homepage/NavBar'
import BackgroundImage from './homepage/backgroundImage'
import LoginSignup from './homepage/LoginSignup'
import Login from './homepage/login/login';
function App() {
    return (
        <div>
            <NavBar/>
            <BackgroundImage />
            <div className="login-signup">
                <LoginSignup name="Login" className="login-btn" />
                <LoginSignup name="Signup" className="signup-btn"/>
            </div>
            <Login/>
        </div>
    )
}


export default App