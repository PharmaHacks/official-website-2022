import React from 'react';
import '../styles/Member.css';

export default class Member extends React.Component{
    render(){
        // const isPresident = (this.props.position === "President");
        return(
            // <div>
            //     {isPresident ? 
            //         <div className="president-container">
            //             <img src={"/images/members/"+this.props.img} alt={this.props.name}/>
            //             <div>
            //                 <span><div>{this.props.n}</div> <div className="m-position">{this.props.position}</div> <div className="m-field">{this.props.field}</div></span>
            //             </div>
            //         </div>
            //         : 
                    <div className="member-container">
                        <img src={"/images/members/"+this.props.img} alt={this.props.name}/>
                        <div>
                            <span><div>{this.props.n}</div> <div className="m-position">{this.props.position}</div> <div className="m-field">{this.props.field}</div></span>
                        </div>
                    </div>

            //     }
                
            // </div>
        )}

    
}