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
                                        TOHI, translating to "Stewards of the Earth," highlights the critical need for better waste management in the U.S. Ignoring recycling revenue causes companies to miss out on approximately $30 billion annually and leads to unnecessary waste polluting our landfills.
                                    </p>
                                    <p>
                                        We created a national database that connects waste creators, recyclers, and feedstock purchasers to optimize opportunities. This database includes locations, materials, capacities, regulations, and subsidies. We work with businesses to coordinate local recycling schedules, maximizing efficiency and capacity.
                                    </p>
                                    <blockquote>
                                        TOHI, translating to "Stewards of the Earth," connects waste creators, recyclers, and feedstock purchasers through a national database, optimizing recycling efficiency and generating significant revenue while reducing landfill waste.
                                    </blockquote>
                                    <p>
                                        Instead of paying disposal fees and facing fines, our customers earn material fees, carbon credits, and rebates. With TOHI, everyone benefits—businesses, the environment, and the community. Join us in protecting America and promoting a profitable, sustainable model.
                                    </p>
                                    <p>
                                        For more info, please review <a href="https://tohienviro.com" target="_blank" rel="noreferrer" >www.tohienviro.com.</a>
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