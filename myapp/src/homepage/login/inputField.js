import React from 'react';
import './inputField.css';

function InputField ({Icon, type, name, placeholder, className}) {
    return (
        <div className="input-field">
            <span className="icon"><Icon/></span>
            <input type = {type} name={name} placeholder={placeholder} className={className}/>
        </div>
    );
}

export default  InputField