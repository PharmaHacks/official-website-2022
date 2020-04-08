import React from 'react';
import './styles/App.css';
import Welcome from './containers/Welcome';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}
