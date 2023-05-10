import React from 'react';
import { Link } from "react-scroll";
import logo from '../assets/img/logo.png'

const MobileMenu = () => {
    return (
        <>
            <div className="offcanvas-header mobile-nav bg-white fixed-top py-4">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-1 hamburger-menu">
                            <div className="offcanvas-wrapper">
                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    <i className='ti-menu offcanvas-icon'></i>
                                </a>
                                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                            <Link to='/'> <img src={logo} alt="" /></Link>
                                        </h5>
                                        <button type="button" className=" text-reset offcanvas-close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                                            <i className='ti-close close-btn'></i>
                                        </button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <div>
                                            <ul>
                                                <li>
                                                    <Link to="/" className="smooth-menu" spy={true} offset={-85} activeClass="active">Home</Link>
                                                </li>
                                                <li>
                                                    <Link to="services" className="smooth-menu" spy={true} offset={-85} activeClass="active">Services</Link>
                                                </li>
                                                <li>
                                                    <Link to="portfolio" className="smooth-menu" spy={true} offset={-85} activeClass="active">Portfolio</Link>
                                                </li>
                                                <li>
                                                    <Link to="about" className="smooth-menu" spy={true} offset={-85} activeClass="active">About</Link>
                                                </li>
                                                <li>
                                                    <Link to="resume" className="smooth-menu" spy={true} offset={-85} activeClass="active">Resume</Link>
                                                </li>
                                                <li>
                                                    <Link to="contact" className="smooth-menu" spy={true} offset={-85} activeClass="active">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 offcanvas-logo text-center ">
                            <Link to='/'> <img src={logo} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;