import React from 'react';
import '../styles/Sponsors.css';
import Sponsor from '../components/Sponsor';
import NewSponsor from '../components/NewSponsor';

export default class Sponsors extends React.Component{
    render(){
    return(
        <div className="sponsors-container" id = "sponsors">
            <div className="filler-background" />
            <div className="sponsors-text">
                <span className="sponsors-title">Sponsors</span>
                <span className="sponsors-details">Our events are made possible thanks to sponsors. If you want to support us and bring students together for this year’s hackathon, click <a href="#!">here</a> to apply.</span>
            </div>
            <div className="individual-sponsor">
                <Sponsor tier="G" year="2019" logo="novartis.png"/>
                <Sponsor tier="S" year="2019" logo="boehringer.png"/>
                <Sponsor tier="S" year="2019" logo="iqvia.png"/>
                <a href="#!"><NewSponsor /></a>
            </div>
        </div>
    )}
}