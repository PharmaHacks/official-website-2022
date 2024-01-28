import React from 'react';
import '../styles/Welcome.css';



export default class Welcome extends React.Component {
    /*EE mod s*/
    state = {
        showText: true
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ showText: !prevState.showText }));
        }, 7000);  // The text will toggle every 7 seconds. You can adjust this duration as needed.
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    /*ee mod end*/

    render() {
        return (
            <div className="welcome-container" id="welcome">
                <div className="w-background-container">
            <svg viewBox="0 0 1174 795" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.101787 350.455C5.10179 196.955 68.6018 25.4547 283.602 1.95469C498.602 -21.5453 545.997 174.29 656.602 190.455C790.053 209.958 1002.71 13.2647 1129.6 58.9547C1255.74 104.374 1068.92 339.283 1049.6 471.955C1029.59 609.399 1013.05 671.301 889.602 734.955C739.308 812.451 555.102 809.955 365.102 754.955C175.102 699.955 -4.89821 503.955 0.101787 350.455Z" fill="#C4C4C4" fillOpacity="0.04">
                <animate dur="15s" repeatCount="indefinite" attributeName="d" 
                calcMode="spline"
                keySplines="0.33 0 0.33 1; 0.33 0 0.33 1"
                values="M0.101787 350.455C5.10179 196.955 68.6018 25.4547 283.602 1.95469C498.602 -21.5453 545.997 174.29 656.602 190.455C790.053 209.958 1002.71 13.2647 1129.6 58.9547C1255.74 104.374 1068.92 339.283 1049.6 471.955C1029.59 609.399 1013.05 671.301 889.602 734.955C739.308 812.451 555.102 809.955 365.102 754.955C175.102 699.955 -4.89821 503.955 0.101787 350.455Z;M1.00006 310C6.00006 156.5 -32.3982 27.4547 182.602 3.95471C397.602 -19.5453 491.395 85.8357 602 102C735.451 121.503 901.708 15.2647 1028.6 60.9547C1154.74 106.374 864.315 267.328 845 400C824.99 537.444 716.395 602.44 582 637.5C524.5 652.5 448 640.5 258 585.5C68 530.5 -3.99994 463.5 1.00006 310Z; M0.101787 350.455C5.10179 196.955 68.6018 25.4547 283.602 1.95469C498.602 -21.5453 545.997 174.29 656.602 190.455C790.053 209.958 1002.71 13.2647 1129.6 58.9547C1255.74 104.374 1068.92 339.283 1049.6 471.955C1029.59 609.399 1013.05 671.301 889.602 734.955C739.308 812.451 555.102 809.955 365.102 754.955C175.102 699.955 -4.89821 503.955 0.101787 350.455Z" />
                </path>
            </svg>
            <svg viewBox="0 0 573 418" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M213.281 379.886C145.222 314.013 247.748 204.273 178.281 139.886C128.238 93.5021 50.2431 147.193 10.2809 91.8861C-48.9364 9.93111 162.612 46.3248 263.281 36.8861C374.767 26.4332 491.34 -47.1287 549.781 48.3861C586.468 108.347 574.206 162.472 549.781 228.386C499.705 363.522 316.835 480.115 213.281 379.886Z" fill="#C4C4C4" fillOpacity="0.03">
                <animate dur="10s" repeatCount="indefinite" attributeName="d" 
                calcMode="spline"
                keySplines="0.33 0 0.33 1; 0.33 0 0.33 1"
                values="M213.281 379.886C145.222 314.013 247.748 204.273 178.281 139.886C128.238 93.5021 50.2431 147.193 10.2809 91.8861C-48.9364 9.93111 162.612 46.3248 263.281 36.8861C374.767 26.4332 491.34 -47.1287 549.781 48.3861C586.468 108.347 574.206 162.472 549.781 228.386C499.705 363.522 316.835 480.115 213.281 379.886Z;M251 366C196.5 352.11 199.967 282.887 130.5 218.5C80.4568 172.116 53.4622 226.807 13.5 171.5C-45.7172 89.545 106.331 33.4387 207 24C318.487 13.5471 461.559 -38.0148 520 57.5C556.688 117.461 472.925 212.086 448.5 278C398.424 413.136 284.5 374.538 251 366Z; M213.281 379.886C145.222 314.013 247.748 204.273 178.281 139.886C128.238 93.5021 50.2431 147.193 10.2809 91.8861C-48.9364 9.93111 162.612 46.3248 263.281 36.8861C374.767 26.4332 491.34 -47.1287 549.781 48.3861C586.468 108.347 574.206 162.472 549.781 228.386C499.705 363.522 316.835 480.115 213.281 379.886Z" />
                </path>
            </svg>

            </div>
                <div className="w-title-section">
                    <picture>
                        <source srcSet="./images/welcome/pharma_logo_2024.svg" media="(max-width: 600px)" />
                        <img src="./images/welcome/pharma_logo_2024.svg" alt="Pharmahacks 2024" className="w-title-text-svg" />
                    </picture>
                    <br/>
                    <div className="event-details-container">
                    <div className="event-detail">
                    <svg className="event-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3h-1V2h-2v1H8V2H6v1H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V9h14v10m0-12H5V5h14v2z" />
                    </svg>                    <p className="event-info">Saturday 16 & Sunday 17 March 2024</p>
                </div>
                <div className="event-detail">
                    <svg className="event-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 20a8 8 0 008-8 8 8 0 00-8-8 8 8 0 00-8 8 8 8 0 008 8m0-18a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2m.5 3H11v10l8.5 5.25 1.5-2.42-7-4.33V5z" />
                    </svg>
                    <p className="event-info">9 AM - 6 PM</p>
                </div>
                <div className="event-detail">
                    <svg className="event-icon" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7m0 9.5a2.5 2.5 0 01-2.5-2.5 2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5A2.5 2.5 0 0112 11.5z" />
                    </svg>
                    <p className="event-info">1250 Rue Guy, Suite 600, Montreal, H3H 2L3</p>
                </div>
                </div>
                    <button onClick={this.goToApplicationForm} className="application-button">Apply Now!</button>                </div>
                <img className="w-dna-gif" src="./images/welcome/DNA.gif" alt="DNA gif" />
            </div>
        );
    }
    goToApplicationForm = () => {
        window.location.href = 'https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=cZYxzedSaEqvqfz4-J8J6mJrVJiWO71Dj2Ron4sFt3xUOENGQjVPUkgyNDFaMk9ZQjRJNzZDUkc3OC4u&Token=298e9bd1685a4d2b9c918b8e8ad01186'; 
    }
}



