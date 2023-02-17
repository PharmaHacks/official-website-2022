import React from 'react';
import '../styles/Sponsor.css';

export default class PreviousSponsor extends React.Component {

    render() {
        return (
            <div className="sponsor-image previous">{
                this.props.logo ?
                    <img src={"/images/sponsors/" + this.props.logo} alt={this.props.name} /> :
                    null
            }
            </div>
        )
    }
}