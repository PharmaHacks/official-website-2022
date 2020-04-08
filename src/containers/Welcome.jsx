import React from 'react';
import Button from '../components/Button';
import '../styles/Welcome.css';

export default class Welcome extends React.Component{
    render(){return(
        <div className="welcome-container">
            <div className="w-background-container">
                <img src="./images/welcome/bg_vector_1.svg" alt="bg vector" />
                <img src="./images/welcome/bg_vector_2.svg" alt="bg vector" />
            </div>
            <div className="w-title-section">
                <img src="./images/welcome/pharma_logo_text.svg" alt="Pharmahacks 2020" className="w-title-text-svg" /> <br/>
                <Button value="Apply now" color="red" action="#" />
            </div>
            <img className="w-dna-gif" src="./images/welcome/DNA.gif" alt="DNA gif" />
        </div>
    )}
}