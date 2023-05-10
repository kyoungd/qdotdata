import React from 'react';
import CountUp from 'react-countup';
import PortfolioModal from './PortfolioModal';
import PortfolioGallery from './PortfolioGallery';
import shape1 from '../assets/img/shape/1.png'
import shape10 from '../assets/img/shape/10.png'

const Portfolio = () => {
    return (
        <>
            <div name="portfolio" className="portfolio-style-six-area default-padding-top">
                <div className="shape-animated-right">
                    <img src={shape1} alt="Shape" />
                </div>
                <div className="container">
                    <div className="heading-left">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="left-info">
                                    <h5 className="sub-title">Recent Work</h5>
                                    <h2 className="title">Look at my portfolio and <br /> give me your feedback</h2>
                                    <div className="heading-shape">
                                        <img src={shape10} alt="Shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="right-info">
                                    <div className="fun-factor-default">
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer">
                                                    <CountUp end={276} duration={5} delay={2} />
                                                </div>
                                                <div className="operator">K</div>
                                            </div>
                                            <span className="medium">Completed Project</span>
                                        </div>
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer">
                                                    <CountUp end={94} duration={5} delay={2} />
                                                </div>
                                                <div className="operator">%</div>
                                            </div>
                                            <span className="medium">Positive Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PortfolioGallery />
                <PortfolioModal />
            </div>
        </>
    );
};

export default Portfolio;