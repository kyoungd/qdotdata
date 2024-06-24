import React from 'react';
import { Link } from 'react-router-dom';
import ServiceModal from './ServiceModal';
// import icon1 from '../assets/img/icon/1.png'
// import icon2 from '../assets/img/icon/2.png'
// import icon4 from '../assets/img/icon/4.png'
import { BsCupHot, BsSpeedometer2, BsTsunami } from "react-icons/bs";

const Services = () => {
    return (
        <>
            <div name="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
                <div className="blur-bg"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Our Expertise</h4>
                                <h2 className="title">What We Do </h2>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <BsCupHot size={70} style={{ padding: '10px' }} /> 
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">Consulting Service</Link></h4>
                                <p>QData and Canum programs are designed to optimize business operations and services while providing environmental compliance, efficiency and return on investment. 
                                </p>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <BsSpeedometer2 size={70} style={{ padding: '10px' }} /> 
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">Experience</Link></h4>
                                <p>QData executives bring over 20 years of executive management experience in professional services, SAAS programming, manufacturing, consumer products, branding, and marketing. With their proven track record, QData delivers fast results with minimal disruption. We also save you consulting fees by leveraging our industry expertise to understand your business better. 
                                </p>
                            </div>
                        </div>

                        <div className="service-style-one col-lg-4 col-md-6">
                            <div className="service-style-one-item">
                                <BsTsunami size={70} style={{ padding: '10px' }} /> 
                                <h4><Link to="#" data-bs-toggle="modal" data-bs-target="#serviceSingleModal">Our Workflow</Link></h4>
                                <p> The true value in AI is in how it is applied and saracoti's Closed Loop AI can analyze every facet of your business to capitalize on where it provides value with increased ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ServiceModal />
            </div>
        </>
    );
};

export default Services;