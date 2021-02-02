import React from 'react'
import './Navbar.css'
import Avatar from '@material-ui/core/Avatar';
import NavBarOption from './NavBarOption'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import SchoolIcon from '@material-ui/icons/School';
function NavBar() {
    return (
        <div class="navbar">
            <div className="nav__left">
                <Avatar>A</Avatar>
            </div>
            <div className="nav__right">
                <NavBarOption Icon={HomeIcon} name="Home" />
                <NavBarOption Icon={InfoIcon} name="About Us"/>
                <NavBarOption Icon={HelpIcon} name="Support"/>
                <NavBarOption Icon={SchoolIcon} name="University"/>
            </div>    
        </div>
    )
}

export default NavBar
