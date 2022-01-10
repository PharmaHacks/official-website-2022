import React from 'react';
import '../styles/Contact.css';
import Button from '../components/Button';
import Social from '../components/Social';

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
                    <div className = "contact-information-address">
                        <span>Trottier Building, McGill University</span>
                        <span>3630 Rue University,</span>
                        <span>Montréal, QC H2A 2B3</span>
                    </div>
                    <div className= "contact-information-email">
                        <span><a href="mailto:contact@pharmahacks.com">contact@pharmahacks.com</a></span>
                    </div>
                    <div className = "contact-information-social">
                        <span>Follow us</span>
                        <div className= "contact-information-social-media">
                        <Social value="/images/contact/facebook.png" action="https://www.facebook.com/StudentPharma/" alt="Facebook"/>
                        <Social value="/images/contact/instagram.png" action="https://www.instagram.com/pharma.hacks/" alt="Instagram"/>
                        <Social value="/images/contact/linkedin.png" action="https://www.linkedin.com/company/studentpharma/" alt="LinkedIn"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}