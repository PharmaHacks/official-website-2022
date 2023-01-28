import React from 'react';
import '../styles/Navbar.css';
import '../styles/MLH.css'

export default class Navbar extends React.Component{
    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
    
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 500) {
            if (this.state.status !== "scrolled") {
              this.setState({ status: "scrolled" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }
    
    render(){return(
        <nav className="navbar-container" style={{
            backgroundColor: this.state.status === "top" ? "transparent" : "#000D1B"
          }}>
            {/* <a id="mlh-trust-badge" 
            href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&#38;utm_medium=TrustBadg&#38;utm_campaign=2022-season&#38;utm_content=gray" 
            target="_blank" rel="noopener noreferrer">
                <img className= "mlh" src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-gray.svg" alt="Major League Hacking 2022 Hackathon Season" />   
            </a> */}
            <img src="./images/navbar/pharma_icon.svg" alt="logo" className="n-logo" style={{opacity : this.state.status === "top" ? "0.5" : "1"}}/>
            <div className="n-items">
                <a href="/#welcome">Welcome</a>
                <a href="/#about">About us</a>
                <a href="/#sponsors">Sponsors</a>
                {/* <a href="#schedule">Schedule</a> */}
                <a href="/#FAQ">FAQ</a>
                <a href="/#contact">Contact</a>
                <a href ="/Team">Team</a>
            </div>
        </nav>
    )}
}


