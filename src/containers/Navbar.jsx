import React from 'react';
import '../styles/Navbar.css';

export default class Navbar extends React.Component{
    render(){return(
        <nav className="navbar-container">
            <img src="./images/navbar/pharma_icon.svg" alt="logo" className="n-logo" />
            <div className="n-items">
                <a href="#welcome">Welcome</a>
                <a href="#about">About us</a>
                <a href="#sponsors">Sponsors</a>
                <a href="#schedule">Schedule</a>
                <a href="#FAQ">FAQ</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )}
}