import React from 'react';
import Member from '../components/Member';
import '../styles/Members.css';
// import Typical from 'react-typical';

export default class Members extends React.Component{
    render(){return(
        <div>
            <div className='members=container'>
                <div className='m-prez'>
                    <div className='m-committees'><span>Pharmahacks President</span></div>  
                    <div className='m-prezImg'>
                        <Member img="Faye.png" n="  Faye Nikolettos" position="President" field="U3 Neuroscience"/>
                    </div>
                    {/* <div className='m-prezText'>
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
                    </div> */}
                </div>
            </div>

            <div className="members-container" id="members">
                <div>
                    <div className='m-committees'><span>Sponsorship</span></div>          
                    <div className='m-list'>
                        <Member img="Goktug.png" n="Goktug Bender" position=" VP Sponsorship" field="U3 Psychology"/>
                        <Member img="Celine.png" n="Celine Sakkal" position="Sponsorship" field="U0 Life Sciences"/>
                    </div>
                    <div className='m-committees'><span>Finance</span></div> 
                    <div className='m-list'>
                        <Member img="Enzo.png" n="Enzo Manzi-Murabukirwa" position="VP Finance" field="U3 Biochemistry"/> 
                    </div>
                    <div className='m-committees'><span>Logistics</span></div> 
                    <div className='m-list'>
                        <Member img="Alexia.png" n="Alexia Botezatu" position="VP Logistics" field="U2 History/Anthropology"/>
                        <Member img="Tracy.png" n="Tracy Wang" position="Logistics" field="U1 Neuroscience"/>
                        <Member img="Aichelle.png" n="Aichelle" position="Logistics" field="U1 CompSci"/>
                        <Member img="Debbie.png" n="Debbie Fitopoulos" position="Logistics" field="U1 Interfaculty"/>
                    </div>
                    <div className='m-committees'><span>Communications</span></div> 
                    <div className='m-list'>
                        <Member img="Carine.png" n="Carine Zbibo" position="VP Communications" field="U2 Pharmacology"/>
                        <Member img="Cindy.png" n="Cindy Li" position="Communications" field="U0 Life Sciences"/>
                        <Member img="Jessica.png" n="Jessica Huang" position="Communications" field="U2 Pharmacology"/>
                        
                    </div>
                    <div className='m-committees'><span>Machine Learning</span></div> 
                    <div className='m-list'>
                        <Member img="Yohai.png" n="Yohaï-Eliel Berreby" position="VP Machine Learning" field="Graduate Physiology"/>
                        <Member img="Amir.png" n="Amir Rajabi Vajargah" position="Machine Learning" field="M1 Human Genetics"/>
                        <Member img="Sabrina.png" n="Sabrina Du" position="Machine Learning" field="U1 Neuroscience"/>
                    </div>
                    <div className='m-committees'><span>Web Development</span></div> 
                    <div className='m-list'>
                        <Member img="Efe.png" n="Efe Ertugrul" position="VP Web Development" field="U3 CompSci/Statistics"/>

                    </div>
                </div>
            </div>
        </div>
    )}
}