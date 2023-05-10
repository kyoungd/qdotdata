import React from 'react';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/img/portfolio/1.jpg'
import portfolio4 from '../assets/img/portfolio/4.jpg'
import portfolio5 from '../assets/img/portfolio/5.jpg'
import portfolio6 from '../assets/img/portfolio/6.jpg'
import portfolio7 from '../assets/img/portfolio/7.jpg'
import portfolio8 from '../assets/img/portfolio/8.jpg'

const PortfolioGallery = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 gallery-content mb--15">
                        <div className="magnific-mix-gallery masonary">
                            <div id="portfolio-grid" className="gallery-items columns-3">
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio4} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Components</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">UI design</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio1} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Creative</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Gaming Apps</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio6} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Business</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Business Apps</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio5} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Invest</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Travel Apps</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio7} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Source</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Lifestyle Apps</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-item">
                                    <div className="overlay-content">
                                        <img src={portfolio8} alt="thumb" />
                                        <div className="content">
                                            <div className="title">
                                                <span>Finance</span>
                                                <h5><Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal">Entertainment Apps</Link></h5>
                                            </div>
                                            <Link to="#" data-bs-toggle="modal" data-bs-target="#projectSingleModal"><i className="ri-arrow-right-line"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioGallery;