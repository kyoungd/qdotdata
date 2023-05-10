import React from 'react';
import illustration3 from '../assets/img/illustration/illustration3a.jpg'

const About = () => {
    return (
        <>
            <div name="about" className="about-style-six-area default-padding-top">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <img src={illustration3} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Us</h4>
                            <h2 className="title">Tim Dupler, Esq; CEO</h2>
                            <p>
                            Tim Dupler has over 30 years of extensive experience as President/CEO with hands on experience in software architecture, business layouts, media management, call center and operational management for consumer product and service companies citing the following examples:
                            </p>
                            <div className="skill-list">
                                <ul>
                                    <li>
                                        <p>President of Ronco Inventions from 1999 to 2001 during the launch of the “Showtime Rotisserie” with annual revenues over $250mm per year and $100mm profits.</p>
                                    </li>
                                    <li>
                                        <p>Amden Corporation: (Robert Urich; Cybersonic Toothbrush) President of Company, built operations and media company.</p>
                                    </li>
                                    <li>
                                        <p>Los Defensores/800THELAW2: Family business with wife, built operations and media programs. On panel that wrote attorney advertising laws for Ca. and adopted by ABA. 76% market share in Spanish and 49% market share for English during tenure.</p>
                                    </li>
                                    <li>
                                        <p>US Auto Parts, Inc.: Re-vamped Manila, Philippines 500 seat call center and increased monthly sales from $3.2mm monthly revenue to over $7mm monthly within 6 months.</p>
                                    </li>
                                    <li>
                                        <p>Mr. Dupler earned a Juris Doctorate Degree from The University of West Los Angeles School of Law. Provided distinguished service to his country in the United States Army Infantry Sergeant in 4 years of Rapid Deployment Infantry units worldwide. Honorable Discharge as a Disabled Army Veteran. Training from General Motors Training School in Memphis, Tennessee and related work experiences resulted in registered GM engineer in 1978.</p>
                                    </li>
                                    <li>
                                        <p><a href="https://linkedin.com/in/tim-dupler-esq-3330b04" target="_blank" rel="noreferrer" >linkedin profile</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;