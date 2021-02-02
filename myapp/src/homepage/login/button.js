import React from 'react';
import './button.css';

function Button({type, value, className}) {
    return (
        <input type={type} value={value} className={className} />
    );
}

export default Button;