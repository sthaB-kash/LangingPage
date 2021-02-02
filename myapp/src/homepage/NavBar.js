import React from 'react'
import './Navbar.css'
import Avatar from '@material-ui/core/Avatar';
import NavBarOption from './NavBarOption'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import HelpIcon from '@material-ui/icons/Help';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import NavbarToggler from './NavbarToggler';
function NavBar() {
    return (
        <div class="navbar nav">
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <NavbarToggler />             
            </button> */}
            <div className="nav__left">
                <h2 className="text-white">Name goes here...</h2>
            </div>
            <div className="nav__right">
                <NavBarOption Icon={HomeIcon} name="Home" className="nav-item active text-white"/>
                <NavBarOption Icon={InfoIcon} name="About Us" className="nav-item"/>
                <NavBarOption Icon={HelpIcon} name="Support" className="nav-item"/>
                <NavBarOption Icon={SchoolIcon} name="University" className="nav-item"/>
                <NavBarOption Icon={WorkIcon} name="Career"className="nav-item"/>
            </div>    
        </div>
    );
}



const NavBarl = () => {
    return (
        <nav className="navbar navbar-expand-lg nav">
            
            <div className="collapse navbar-collapse nav__right" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#none">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#none">Universities</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="#none">Test</a>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Student Supports
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#nonenone">Education Counselors</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#none">Banks</a>
                    </div>
                </li> 
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#none" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Career
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#nonenone">Internship</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#none">Job</a>
                    </div>
                </li> 
                
                <li className="nav-item">
                    <a className="nav-link" href="#none">About us</a>
                </li>
                
                </ul>
            </div>
            </nav>
    );
};


export default NavBar
