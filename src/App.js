import React from 'react';
import './styles/App.css';
import Navbar from './containers/Navbar';
import Welcome from './containers/Welcome';
import Countdown from './containers/Countdown';
import About from './containers/About';
import Sponsors from './containers/Sponsors';
import FAQ from './containers/FAQ';
import Contact from './containers/Contact';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Countdown />
        <About />
        <Sponsors />
        <FAQ />
        <Contact/>
      </div>
    );
  }
}
