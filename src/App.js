import React from 'react';
import './styles/App.css';
import Navbar from './containers/Navbar';
import Welcome from './containers/Welcome';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
        <Welcome />
      </div>
    );
  }
}
