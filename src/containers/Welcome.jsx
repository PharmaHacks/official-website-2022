import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component {
    state = {
        showText: true
    };

   

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="welcome-container" id="welcome">
                <div className="w-background-container">
                    {/* Background SVGs, animations omitted for brevity */}
                </div>
                <div className="w-title-section">
    <img src="./images/welcome/pharma_logo_2024.png" alt="Pharmahacks 2024" className="w-title-text" />
    {this.state.showText && <div className="typing-effect">
        Thank you all,see you next year!
    </div>}
</div>

                <img className="w-dna-gif" src="./images/welcome/DNA.gif" alt="DNA gif" />
            </div>
        );
    }
}
