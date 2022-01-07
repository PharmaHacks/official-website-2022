import React from 'react';
import '../styles/Contact.css';
import Button from '../components/Button';

export default class Contact extends React.Component{
    render(){
        return(
            <div className= "contact-container" id = "contact">
                <div className= "contact-apply-section">
                    <div className = "contact-apply-title">
                        <span>Let's get you started!</span>
                    </div>
                    <div className = "contact-apply-button">
                        <Button value="Apply now" color="red" action="#"/>
                    </div>
                </div>
                <div className= "contact-information-section">

                </div>

            </div>
        )
    }
}