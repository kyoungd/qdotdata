import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner7 from '../assets/img/banner/modal-7.jpg'

const BlogModal7 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal7" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="blog-single-content">
                                <div className="thumb">
                                    <Link to="#"><img src={banner7} alt="Thumb" /></Link>
                                </div>
                                <div className="info">
                                    <p>
                                        In today's regulatory environment, financial institutions and enterprises need secure, compliant solutions for managing sensitive financial data. QDotData's FIN tech consulting practice specializes in building custom data pipelines for storing and transporting financial data using Google Cloud Platform's enterprise-grade infrastructure.
                                    </p>
                                    <p>
                                        Our team architects solutions leveraging Google Cloud's security and compliance certifications, including SOC 1/2/3, PCI DSS, and ISO 27001. From encrypted data storage with Cloud Storage and BigQuery to secure data transport via Pub/Sub and Dataflow, we design end-to-end systems that meet the most stringent regulatory requirements while enabling real-time analytics and reporting.
                                    </p>
                                    <blockquote>
                                        Secure, compliant, and scalable — financial data infrastructure built for the modern enterprise.
                                    </blockquote>
                                    <p>
                                        Whether you need to migrate legacy financial systems to the cloud, build real-time transaction processing pipelines, or ensure your data architecture meets evolving compliance standards, QDotData delivers tailored solutions that protect your data and accelerate your business.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogModal7;