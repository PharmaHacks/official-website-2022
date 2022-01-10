import React from 'react';
import '../styles/Button.css';

export default class Button extends React.Component{
    render(){return(
        <a className={"button-container "+this.props.color} href={this.props.action}>
            {this.props.value}
        </a>
    )}
}