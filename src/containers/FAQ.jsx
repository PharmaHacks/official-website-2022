import React from 'react';
// import { Accordion } from 'react-bootstrap-accordion';
// import 'react-bootstrap-accordion/dist/index.css'
import '../styles/FAQ.css';

export default class About extends React.Component{
    // constructor(props) {
    //     super(props);   
    //     var acc = document.getElementsByClassName("accordion");
    //     var i;

    //     for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //         panel.style.maxHeight = null;
    //         } else {
    //         panel.style.maxHeight = panel.scrollHeight + "px";
    //         }
    //     });
    //     }
    // }
    render(){
        return(
        <div className="faq-container">
            <div className="faq-title">We're often asked</div>
            {/* <Accordion title="Who is this event for?">
                Lorem ipsum...
            </Accordion>
            <Accordion title="Who is this event for?">
                Lorem ipsum...
            </Accordion>
            <Accordion title="Who is this event for?">
                Lorem ipsum...
            </Accordion> */}
            {/*
            <div className="faq-eventDescriptionContainer">
                <div className="faq-eventDescriptionTitle">Who is this event for?</div>
                <div className="faq-eventDescriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</div>
            </div>
            <button className="accordion">Who is this event for?</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>

            <button className="accordion">Is the event free?</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>

            <button className="accordion">Can students from all universities participate?</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>

            <button class="accordion">What's the duration of the event?</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>
            <div className="faq-additional">Don't see your question? Ask us <a href="#!!">here</a></div>
            */}
        </div>        
    )}
}