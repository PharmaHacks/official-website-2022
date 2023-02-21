import React from 'react';
import '../styles/App.css';
import About from '../containers/About';
import Sponsors from '../containers/HomeSponsors';
// import FAQ from '../containers/FAQ';
import Contact from '../containers/Contact';
import Welcome from '../containers/Welcome'
// import Sponsorcards from '../containers/Sponsorcards'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Welcome />
        {/* <HackathonWelcome /> */}
        <About />
        <Sponsors />
        {/* <Sponsorcards /> */}
        {/* <FAQ /> */}
        <Contact/>
    </div>
      
    );
  }
}
