import React from 'react';
import '../styles/Navbar.css';
import '../styles/MLH.css'
import Button from '../components/Button';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
    };
  }

  componentDidMount() {
    this.listener = document.addEventListener("scroll", (e) => {
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

  componentWillUnmount() {
    document.removeEventListener("scroll", this.listener);
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
  }

  navigateHome = () => {
    window.location.href = '/';
  }

  render() {
    return (
      <nav
        className={`navbar-container ${
          this.state.status === "shrink" ? "shrink" : ""
          }`}
        style={{
          backgroundColor: this.state.status === "top" ? "transparent" : "#000D1B",
        }}
      >
        <div className="n-logo" onClick={window.innerWidth <= 800 ? this.openNav : this.navigateHome}>
          <img
            src="./images/navbar/pharma_icon.svg"
            alt="logo"
            style={{ opacity: this.state.status === "top" ? "0.5" : "1" }}
          />
        </div>
        <div className="n-tabs">
          <div className="n-items">
            <a href="/#welcome">Home</a>
            <a href="/Team">Team</a>
            <a href="/Hackathon2023">Hackathon</a>
          </div>

          <div className="n-buttons">
            <Button value="Sponsor Us!" color="lblue" action="mailto:contact@pharmahacks.com" />
            <div style={{ width: '1vw' }}></div>
          </div>
        </div>

        <div id="mySidebar" className="sidebar">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
          <a href="/#welcome">Home</a>
          <a href="/Team">Team</a>
          <a href="/Hackathon2023">Hackathon</a>
          <div className="sidebar-btn">
            <button className="button lblue" onClick={() => window.location.href = 'mailto:contact@pharmahacks.com'}>Sponsor Us!</button>
          </div>
        </div>

        <div id="main">
          {/* other page content */}
        </div>
      </nav>
    );
  }
}
