import React from 'react';
import illustration4 from '../assets/img/illustration/illustration4.jpg'

const About3 = () => {
    return (
        <>
            <div name="about" className="about-style-six-area default-padding-top">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <img src={illustration4} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Us</h4>
                            <h2 className="title">About3 Suleman; Co-founder</h2>
                            <p>
                            Award winning telecommunications executive acknowledged internationally for launching one of the  largest satellite telecommunications networks in Africa. A true visionary with a strategic mindset and  proven performance in leading organizations through change and building cohesive teams of  talented professionals that consistently deliver exceptional growth and profits in extremely  challenging operating environments. A corporate strategy and change management specialist adept  at turning around troubled companies and motivating culturally diverse teams while maintaining core  corporate values. Led and motivated multinational team of 1,700 employees and distributors  spanning 26 countries to achieve phenomenal growth in sales and revenues topping US $ 30 million.  Vast experience spans start ups in aviation, telecommunications, oil and gas, and agriculture sectors,  including mergers and acquisitions and preparing mature businesses for sale. 
                            </p>
                            
                            <div className="skill-list">
                                <ul>
                                    <li>
                                        <p><a href="https://www.linkedin.com/in/salim-suleman-4ab61b39" target="_blank" rel="noreferrer" >linkedin profile</a></p>
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

export default About3;