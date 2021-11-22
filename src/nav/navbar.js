import React from 'react';
import './navbar.css';
import { Navbar } from "react-bootstrap";
import FooterLogo from '../img/Frame.png'
function Nav (){

    return(
            <>
    <header>
    <div className="container">
        <Navbar className="navbar">
            <div className="navBrand">
                <a href="#!"><img src={FooterLogo} alt="png"/></a>
            </div>
            <div className="navItem">
                <ul>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About Me</a></li>
                    <li><a href="#!">Portufelio</a></li>
                    <li><a href="#!">Sign In</a></li>
                </ul>
            </div>
        </Navbar>
        </div>
    </header>
    </>
    )
}
export default Nav