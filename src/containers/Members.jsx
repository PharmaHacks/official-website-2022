import React from 'react';
import Member from '../components/Member';
import '../styles/Members.css';
import Typical from 'react-typical';

export default class Members extends React.Component{
    render(){return(
        <div>
            <div className='members=container'>
                <div className='m-prez'>
                    <div className='m-prezImg'>
                        <Member img="Ozhan.png" n="Amirozhan Dehghani" position="President" field="U3 Neuroscience"/>
                    </div>
                    <div className='m-prezText'>
                        <span> "We are a group of students passionate about facilitating the transition of students from academia to industry by organizing <br/>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    ' Hackathons."', 1000,
                                    ' Workshops."', 1000,
                                    ' Networking Events."', 1000
                                ]}
                            />
                            <br/>
                            <p className='m-presQuotation'><i>-Ozhan, Pharmhacks President</i></p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="members-container" id="members">
                <div>
                    <div className='m-committees'><span>Sponsorship</span></div>          
                    <div className='m-list'>
                        <Member img="Amy.png" n="Amy Qian" position="VP Sponsorship" field="U3 Microbio/Immunology"/>
                        <Member img="Goktug.png" n="Goktug Bender" position="Sponsorship" field="U3 Microbio/Immunology"/>
                        <Member img="Mira.png" n="Mira Zaboube" position="Sponsorship" field="U1 Pharmacology"/>
                        <Member img="Mozhdeh.png" n="Mozhdeh Zaboube" position="Sponsorship" field="U1 Pharmacology"/>
                    </div>
                    <div className='m-committees'><span>Finance</span></div> 
                    <div className='m-list'>
                        <Member img="Brian.png" n="Brian Zhang" position="VP Finance" field="U3 Microbio/Immunology"/> 
                    </div>
                    <div className='m-committees'><span>Logistics</span></div> 
                    <div className='m-list'>
                        <Member img="Yuan.png" n="Yuan Ding" position="VP Logistics" field="U3 Neuroscience"/>
                        <Member img="Nazia.png" n="Nazia Chowdhury" position="Logistics" field="U1 Software Engineering"/>
                    </div>
                    <div className='m-committees'><span>Communications</span></div> 
                    <div className='m-list'>
                        <Member img="Faye.png" n="Faye Nikolettos" position="VP Communications" field="U2 Neuroscience"/>
                        <Member img="Carine.png" n="Carine Zbibo" position="Communications" field="U1 Pharmacology"/>
                        <Member img="Jessica.png" n="Jessica Huang" position="Communications" field="U2 Pharmacology"/>
                    </div>
                    <div className='m-committees'><span>Machine Learning</span></div> 
                    <div className='m-list'>
                        <Member img="Dom.png" n="Dominic Boutet" position="VP Machine Learning" field="U3 Neuroscience"/>
                        <Member img="Samantha.png" n="Samantha La Rosa" position="Machine Learning" field="U3 Neuroscience"/>
                        <Member img="Rishit.png" n="Rishit Dagli" position="Machine Learning" field="UofT CompSci Year 1"/>
                    </div>
                    <div className='m-committees'><span>Web Development</span></div> 
                    <div className='m-list'>
                        <Member img="Max.png" n="Max Tong" position="VP Web Development" field="U3 CompSci/Bio"/>
                    </div>
                        {/*  */}
                        {/* <Member img="Yvona.png" n="Yvona Acimovic" position="Web Dev" field="U3 CompSci"/> */}
                        {/* <Member img="Faith.png" n="Faith " position="Sponsorship" field="?"/> */}
                        {/* <Member img="Feiteng.png" n="Feiteng ?" position="Logistics" field="?"/> */}
                </div>
            </div>
        </div>
    )}
}