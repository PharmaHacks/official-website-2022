import React from 'react';
import AccordionItem from '../components/AccordionItem';
import '../styles/FAQ.css';

export default class FAQ extends React.Component{
    render(){
        return(
        <div className="faq-container" id = "FAQ">
            <div className="faq-title">We're often asked</div>

            <AccordionItem title={"Who is this event for?"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"} />
            <AccordionItem title={"Is the event free?"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"} />
            <AccordionItem title={"Can students from all universities participate?"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"} />
            <AccordionItem title={"What’s the duration of the event?"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"} />

            <div className="faq-additional">Don't see your question? Ask us <a href="#!!">here</a></div>
           
        </div>        
    )}
}