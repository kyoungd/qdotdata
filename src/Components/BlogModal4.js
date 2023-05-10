import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal4 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal4" tabIndex="-1" aria-hidden="true">
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
                                        Angellink was designed to resolve another critical problem involving helping others.
                                    </p>
                                    <p>
                                        Instead of most (if not all) your donations going to cover inflated costs, overhead and let's face it, sometimes greed, Angellink is designed so every donation can be tracked to fulfillment with video and GPS tracking documentation required for all payments showing the project and monies were spent as donated.
                                    </p>
                                    <blockquote>
                                        Transpancy and accountability for all donations using blockchain technology.
                                    </blockquote>
                                    <p>
                                        Project is in final phase of completion and is looking for investors. For more on the great features of Angellink,
                                    </p>
                                    <p>
                                        For more on the great features of Angellink, please see <a href="https://angellinkorg" target="_blank" rel="noreferrer" >www.angellink.org</a>
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

export default BlogModal4;