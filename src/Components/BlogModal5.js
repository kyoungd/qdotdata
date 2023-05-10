import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal5 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal5" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="blog-single-content">
                                <div className="thumb">
                                    <Link to="#"><img src={banner4} alt="Thumb" /></Link>
                                </div>
                                <div className="info">
                                    <p>
                                        QLAN is designed for large commercial properties to drastically reduce lighting and electrical costs by creating a wireless LAN using the building lighting, A/C controls and security system to create a "wireless mesh network" that actually creates power back to  the electrical grid while also creating a robust WiFi network allowing building occupants to utilize their computers, phones, printers...
                                    </p>
                                    <p>
                                        This mesh network allows the building owner to become the wireless provider for all occupants which includes TV, Phone and Internet revenues.
                                    </p>
                                    <blockquote>
                                        QLAN is a patented technology that creates a wireless mesh network using the building's lighting, A/C and security systems.
                                    </blockquote>
                                    <p>
                                        Project has been completed and is in production.
                                    </p>
                                    <p>
                                        For more information, please go to <a href="https://qlaninc.com" target="_blank" rel="noreferrer" >www.qlaninc.com</a>
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

export default BlogModal5;