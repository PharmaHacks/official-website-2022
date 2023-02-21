import React from 'react';
import '../styles/HackSponsors.css';
import Sponsor from '../components/Sponsor';
// import NewSponsor from '../components/NewSponsor';

export default class HackSponsors extends React.Component{
    render(){
    return(
        <div className="ha-sponsors-container" id = "sponsors">
            <div className="ha-filler-background" />
              <div className='ha-sponsors-background'>
                <div className="ha-sponsors-text">
                    <span className="ha-sponsors-title">Sponsors</span>
                    <div className="ha-sponsors-details">Our events are made possible thanks to sponsors. As a sponsor, you’ll have the opportunity to present a challenge, have your own sponsorship booth, host workshops, and/or recruit talented individuals. We offer a platform where sponsors can observe first hand the growth of our participants throughout the weekend and recruit exceptional hackers.
                      <span> If you want to support us and bring students together for this year’s hackathon, check out our packages</span> <a href = "/Sponsorship-Package.pdf" target="_blank" rel="noopener noreferrer">here.</a>
                    </div>
                </div>
                <div className="ha-individual-sponsor">
                    {/* <div className="year-titles" id = "current">Current</div> */}
                    <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="G" year="2023" logo="pfizer.png"/>
                    </a> 
                    <a href="https://www.injoy.bio" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="O" year="2023" logo="injoy.webp"/>
                    </a> 
                    <a href="https://www.admarebio.com/en/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="B" year="2023" logo="admare.svg"/>
                    </a> 
                    <a href="https://www.ssmu.ca" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="P" year="2023" logo="ssmu.png"/>
                    </a>
                    <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="P" year="2023" logo="UDEM.svg"/>
                    </a>
                    <a href="https://susmcgill.ca/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="P" year="2023" logo="SUS.jpeg"/>
                    </a>
                    <a href="https://www.mcgill.ca/pharma/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="P" year="2023" logo="mcgillPharma.png"/>
                    </a>
                    

                    {/* PAST SPONSORS */}
                    {/* <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="B" year="2022" logo="pfizer.png"/>
                    </a>
                    <a href="https://www.talent-accelerator.com/medical-technology-talent-accelerator/home" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="B" year="2022" logo="medtech.png"/>
                    </a> */}
                    {/* <a href="https://www.novartis.ca" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="G" year="2019" logo="novartis.png"/>
                    </a>
                    <a href="https://www.boehringer-ingelheim.ca" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="S" year="2019" logo="boehringer.png"/>
                    </a>
                    <a href="https://www.iqvia.com/" target="_blank" rel="noopener noreferrer">
                      <Sponsor tier="S" year="2019" logo="iqvia.png"/>
                    </a> */}
                    {/* <a href="mailto:contact@pharmahacks.com" target="_blank" rel="noopener noreferrer"><NewSponsor /></a>              */}
                    {/* <div className="year-titles" id = "previous">Previous</div>
                    <div className='previous-sponsors'> 
                        
                  </div> */}
                  </div>
              </div>
        </div>
    )}
}