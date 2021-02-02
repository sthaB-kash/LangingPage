import React from 'react';
import './login.css';
import InputField from'./inputField';
import Button from './button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

function Login() {
    return (
        <React.Fragment>
            <div className="background"></div>
            <div className="login-div">

                {/* <h3 className="text-success" style={{fontSize: '40px'}}>LOGIN</h3> */}
                <AccountCircleIcon style={{fontSize: '85px', margin: '10px 0 '}}/>
                <div className="input-field-div">
                    <InputField Icon={PersonIcon} type="text" name="username" placeholder="Username" className="login-username"/>
                    <InputField Icon={LockIcon} type="password" name="password" placeholder="Password" className="login-password" />
                </div>
                <div className="login-div-btns">                    
                    <Button type="submit" name="submit" value="Login" className="user-login-btn"/>
                </div>
                <div>
                    <p>Not registered yet? <a href="#none">Register Now</a> </p>
                </div>
                <Button type="button" name="cancel" value="Cancel" className="login-cancel-btn"/>
            </div>
        </React.Fragment>
    );
}

export default Login;