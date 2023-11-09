import React from 'react';
import '../styles/HomeSponsors.css';
import CurrentSponsor from '../components/CurrentSponsor';
import PreviousSponsor from '../components/PreviousSponsor';

export default class HomeSponsors extends React.Component {
  render() {
    return (
      <div className="sponsors-container" id="sponsors">
        <div className="filler-background" />
        <div className='sponsors-background'>
          <div className="sponsors-text">
            <span className="sponsors-title">Sponsors</span>
            <div className="sponsors-details">Our events are made possible thanks to sponsors. As a sponsor, you’ll have the opportunity to present a challenge, have your own sponsorship booth, host workshops, and/or recruit talented individuals. We offer a platform where sponsors can observe first hand the growth of our participants throughout the weekend and recruit exceptional hackers.
              <span> If you want to support us and bring students together for this year’s hackathon, check out our packages</span> <a href="/Sponsorship_package_pharmahacks2023.pdf" target="_blank" rel="noopener noreferrer">here.</a>
            </div>
          </div>
          <div className="individual-sponsor">
            {/*<div className="year-titles" id="current">Current</div>*/}

            <a href="https://www.admarebio.com/en/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="admare.svg" name="adMare BioInnovations" />
            </a>
            <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="pfizer.png" name="Pfizer"/>
            </a>
            <a href="https://www.injoy.bio/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="injoy.webp" name="Injoy"/>
            </a>

            <a href="https://www.umontreal.ca/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="UDEM.svg" name="UDEM" />
            </a>

            <a href="https://ssmu.ca/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="ssmu_cropped.png" name="SSMU" />
            </a>

            <a href="https://susmcgill.ca/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="sus.png" name="SUS" />
            </a>
            <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="mlh.png" name="MLH" />
            </a>
            <a href="https://mila.quebec/en/" target="_blank" rel="noopener noreferrer">
              <CurrentSponsor logo="mila1.png" name="MILA" />
            </a>
            <a href = "https://www.soinsintelligentsquebec.com/phyla" target='_blank' rel = "noopener noreferrer">
              <CurrentSponsor logo="phyla.png" name="PHYLA" />
            </a>

            {/*<div className="year-titles" id="previous">Previous</div>*/}
            {!this.props.noPreviousSponsors ?
              <div className='previous-sponsors'>
                <a href="https://www.talent-accelerator.com/medical-technology-talent-accelerator/home" target="_blank" rel="noopener noreferrer">
                  <PreviousSponsor logo="medtech_transparent.png" />
                </a>
                <a href="https://www.mcgill.ca/pharma/" target="_blank" rel="noopener noreferrer">
                  <PreviousSponsor logo="mcgillPharma.png" />
                </a>
                <a href="https://www.novartis.ca" target="_blank" rel="noopener noreferrer">
                  <PreviousSponsor logo="novartis_transparent.png" />
                </a>
                <a href="https://www.boehringer-ingelheim.ca" target="_blank" rel="noopener noreferrer">
                  <PreviousSponsor logo="boehringer_transparent.png" />
                </a>
                <a href="https://www.iqvia.com/" target="_blank" rel="noopener noreferrer">
                  <PreviousSponsor logo="iqvia_transparent.png" />
                </a>

              </div> : null
            }
          </div>
        </div>
      </div>
    )
  }
}
