import React from 'react';
import { Link } from 'react-scroll';
import shape10 from '../assets/img/shape/10.png'
import shape2 from '../assets/img/shape/2.webp'


const Pricing = () => {
    return (
        <>
            <div name="pricing" className="pricing-area default-padding-top">
                <div className="container">
                    <div className="pricing-box">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="heading-left">
                                    <div className="left-info">
                                        <h5 className="sub-title">Pricing</h5>
                                        <h2 className="title">The best pricing plans <br /> to get your best</h2>
                                        <div className="heading-shape">
                                            <img src={shape10} alt="Shape" />
                                        </div>
                                    </div>
                                </div>
                                <div className="save-amount mt-100 mt-md-50">
                                    <h4>Save up to <strong>50%</strong> with your every order</h4>
                                    <img src={shape2} alt="Thumb" />
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="pricing-style-one">
                                    <div className="content">
                                        <h4>WordPress Development</h4>
                                        <ul>
                                            <li>1 Page with Elementor</li>
                                            <li>Design Customization</li>
                                            <li>Responsive Design</li>
                                        </ul>
                                        <Link className="btn mt-25 btn-sm circle btn-theme" to="contact">Order Now</Link>
                                    </div>
                                    <div className="price">
                                        <h2><sup>$</sup>48</h2>
                                        <i className="ti-wordpress"></i>
                                    </div>
                                </div>
                                <div className="pricing-style-one">
                                    <div className="content">
                                        <h4>Static frontend design</h4>
                                        <ul>
                                            <li>2 Page with Bootstrap5</li>
                                            <li>Design implement</li>
                                            <li>Responsive Design</li>
                                        </ul>
                                        <Link className="btn mt-25 btn-sm circle btn-dark" to="contact">Order Now</Link>
                                    </div>
                                    <div className="price">
                                        <h2><sup>$</sup>24</h2>
                                        <i className="ti-html5"></i>
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

export default Pricing;