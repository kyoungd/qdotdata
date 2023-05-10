import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal2 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal2" tabIndex="-1" aria-hidden="true">
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
                                        M$ is a Closed Loop SAAS platforms designed to remove the "old world" costs, inefficiencies and security failures of the current ACH and PCI platforms.
                                    </p>
                                    <p>
                                        M$ provides a "Ledger entry only" transaction between the issuing bank, its merchants and their customers. With this platform, there are no third party gateways, merchant login acccounts or accessible servers that can be hacked by outside parties.
                                    </p>
                                    <blockquote>
                                        The M$ platform is a closed loop system that you control entirely. It is a ledger entry only system that is not subject to any of the current ACH or PCI regulations.
                                    </blockquote>
                                    <p>
                                        M$ is therefore; safer, less expensive and entirely compliant with any HIPAA or other database restricted platforms.
                                    </p>
                                    <p>
                                        For more info, please review <a href="https://numinoc.com" target="_blank" rel="noreferrer" >www.numinoc.com.</a>
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

export default BlogModal2;