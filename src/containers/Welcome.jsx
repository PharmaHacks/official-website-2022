import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className="welcome-container" id="welcome">
                <div className="w-background-container">
                    {/* Background SVGs, animations omitted for brevity */}
                </div>
                <div className="w-title-section">
                    <img src="./images/welcome/pharma_logo_2024.png" alt="Pharmahacks 2024" className="w-title-text" />
                    
                    {/* Refined Thematic Text */}
                    <div className="thematic-text">
                        Member applications are now open!
                    </div>

                    {/* Button to the application form */}
                    {/* UNCOMMENT WHEN APPLICATIONS OPEN! */}
                    {/* This is the current button that is stay tuned, remove this and uncomment the one below when apps are open. Then HREF the google form link */}
                    <div className="application-link">
                        <span className="apply-button">Stay Tuned!</span>
                    </div>

                    {/* <div className="application-link">
                        <a
                            // href="https://forms.gle/Cv2Nie39vnGWjciF8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="apply-button"
                        >
                            Stay Tuned!
                        </a>
                    </div> */}
                </div>

                <img className="w-dna-gif" src="./images/welcome/DNA.gif" alt="DNA gif" />
            </div>
        );
    }
}
