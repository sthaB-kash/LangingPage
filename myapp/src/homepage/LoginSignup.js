import React from 'react'
import './LoginSignup.css'


const LoginSignup =(props) => {
    return (
        <div className={props.className} onClick={()=>clicked(props.className)}>
            {props.name}
        </div>
    );

};

function clicked(name) {
    if(name==="login-btn")
    {
        login();
    }else  {
        signup();
    }  
        

}
const login = () => {

    const loginDiv = document.querySelector('.login-div');
    loginDiv.style.display="block";
    document.querySelector('.signup-btn').style.display = "none";
    document.querySelector('.login-btn').style.display = "none";
    document.querySelector('.background').style.display = "block";
    
};
const signup = () => {
    alert('signup clicked');
};

export default LoginSignup