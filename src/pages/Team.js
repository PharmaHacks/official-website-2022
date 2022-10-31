import React from 'react';
import Teams from '../containers/Teams';
import Members from '../containers/Members';
// import Contact from '../containers/Contact';
import '../styles/Team.css';

export default class Team extends React.Component{
    render(){
      return (
        <div className="Team" id='Team'>
            <Teams />
            <Members />
            {/* <Contact /> */}
        </div>
      );
    }
}