import React from 'react';
import '../styles/Navbar.css';
import '../styles/MLH.css'

export default class Navbar extends React.Component{
    render(){return(
        <nav className="navbar-container">
            <a id="mlh-trust-badge" 
            href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&#38;utm_medium=TrustBadg&#38;utm_campaign=2022-season&#38;utm_content=gray" 
            target="_blank" rel="noopener noreferrer">
                <img className= "mlh" src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-gray.svg" alt="Major League Hacking 2022 Hackathon Season" />   
            </a>
            <img src="./images/navbar/pharma_icon.svg" alt="logo" className="n-logo" />
            <div className="n-items">
                <a href="#welcome">Welcome</a>
                <a href="#about">About us</a>
                <a href="#sponsors">Sponsors</a>
                {/* <a href="#schedule">Schedule</a> */}
                <a href="#FAQ">FAQ</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )}
}


