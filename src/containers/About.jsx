import React from 'react';
import '../styles/About.css';
import BlobCell from '../components/BlobCell';

export default class About extends React.Component{
    render(){return(
        <div className="about-container" id="about">
            <div className="a-backdrop">
                Pharmahacks
            </div>
            <div className="a-intro">
                <BlobCell />
                <div className="a-title">
                    <span>What is</span><br/>
                    <span>Pharmahacks</span>
                </div>
                <div className="a-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc quis euismod cum. Tellus vitae congue ac sit dolor. Massa dignissim porttitor sit elementum sollicitudin facilisi tincidunt hendrerit enim. 
                </div>
            </div>
            <div className="a-stories">

            </div>
        </div>
    )}
}