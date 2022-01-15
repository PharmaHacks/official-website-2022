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
                <div className="sponsors-details">Our events are made possible thanks to sponsors. As a sponsor, you’ll have the opportunity to present a challenge, have your own sponsorship booth, host workshops, and/or recruit talented individuals. We offer a platform where sponsors can observe first hand the growth of our participants throughout the weekend and recruit exceptional hackers.
                    If you want to support us and bring students together for this year’s hackathon, check out our packages <a href = "/Sponsorship-Package.pdf" target="_blank" rel="noopener noreferrer">here.</a></div>
            </div>
            <div className="individual-sponsor">
                <div className="year-titles">Current</div>
                <Sponsor tier="O" year="2022" logo="phyla.png"/>
                <div className="year-titles">Previous</div>
                <div>
                    <Sponsor tier="G" year="2019" logo="novartis.png"/>
                    <Sponsor tier="S" year="2019" logo="boehringer.png"/>
                    <Sponsor tier="S" year="2019" logo="iqvia.png"/>
                    <a href="mailto:contact@pharmahacks.com" target="_blank" rel="noopener noreferrer"><NewSponsor /></a>
                </div>
            </div>
        </div>
    )}
}