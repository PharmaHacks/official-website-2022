import React from 'react';
import '../styles/Sponsor.css';

export default class CurrentSponsor extends React.Component {

    render() {
        return (
            <div className="sponsor-image current">{
                this.props.logo ?
                    <img src={"/images/sponsors/" + this.props.logo} alt={this.props.name} /> :
                    null
            }
            </div>
        )
    }
}