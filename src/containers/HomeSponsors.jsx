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

          <div className="new-sponsors-section">
            <div className="year-titles">Current Sponsors</div>
            <div className="sponsor-logo-grid">
              {/* Current Sponsors Links */}
              <a href="https://www.mcgill.ca/pharma/" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="mcgillPharma.png" name="McGill Pharma" />
              </a>

              <a href="https://www.mcgill.ca/science/" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="mcg_fac_science_rgb_red_ver_en-removebg-preview.png" name="McGill Science" />
              </a>

              <a href="https://www.mcgill.ca/epi-biostat-occh/" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="McGill-EBOH-logo-removebg-preview.png" name="McGill EBOH" />
              </a>

              <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="wolfram-corporate-logo-stacked-med-removebg-preview.png" name="wOLFRAM" />
              </a>
              
              {/* ... Add more CurrentSponsor components as needed ... */}
            </div>
          </div>

          <div className="previous-sponsors-section">
            <div className="year-titles">Previous Sponsors</div>
            <div className="sponsor-logo-grid">
              {/* Previous Sponsors Links */}
              <a href="https://www.admarebio.com/en/" target="_blank" rel="noopener noreferrer">
                <CurrentSponsor logo="admare.svg" name="adMare BioInnovations" />
              </a>
              <a href="https://www.pfizer.com" target="_blank" rel="noopener noreferrer">
                <CurrentSponsor logo="pfizer.png" name="Pfizer" />
              </a>
              <a href="https://www.talent-accelerator.com/medical-technology-talent-accelerator/home" target="_blank" rel="noopener noreferrer">
                <PreviousSponsor logo="medtech_transparent.png" name="Medical Technology Talent Accelerator" />
              </a>
              
              {/* ... Add more PreviousSponsor components as needed ... */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
