import React from 'react';
import '../styles/HomeSponsor.css';

export default class PreviousSponsor extends React.Component {

    render() {
        return (
            <div className="hs-sponsor-image previous">{
                this.props.logo ?
                    <img src={"/images/sponsors/" + this.props.logo} alt={this.props.name} /> :
                    null
            }
            </div>
        )
    }
}