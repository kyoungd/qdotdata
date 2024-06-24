import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal3 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal3" tabIndex="-1" aria-hidden="true">
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
                                        M$ is an internally commissioned "Business as a Bank" platform that allows mid level businesses ($20m or higher in annual payables) to have the benefits of Fortune 100 companies, but with even more sophistication and wealth management benefits.
                                    </p>
                                    <p>
                                        Additionally, ,we developed a non PCI/ACH merchant processing platform for CBD and Cannabis. Project is in final phase of completion and has patents pending.                                    </p>
                                    <blockquote>
                                        Be your own bank. Business as a bank.
                                    </blockquote>
                                    {/* <p>
                                        For more information, please see <a href="https://myqbanq.com" target="_blank" rel="noreferrer" >www.myqbanq.com.</a>
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogModal3;