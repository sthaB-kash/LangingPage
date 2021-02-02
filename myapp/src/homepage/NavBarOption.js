import React from 'react'
import './NavBarOption.css'
function NavBarOption({Icon,name}) {
    return (
        <div className="option_bar">
            <Icon/>
            <h5>{name}</h5>
        </div>
    )
}

export default NavBarOption
