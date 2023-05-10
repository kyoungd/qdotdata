import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal6 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal6" tabIndex="-1" aria-hidden="true">
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
                                        Another major issue plaguing the world is the incredible amount of water required to push oil out of the ground that is unquestionably needed for our society to exist.
                                    </p>
                                    <p>
                                        Additionally, once that water has been contaminated, it is traditionally injected into deep wells so it will never be used again requiring a huge resupply requirement and it will hopefully not contaminate the existing underground groundwater aquifers. QH2O has been developed to resolve both those problems at a very low cost. Using its proprietary technology, QH2O separates the oil from water and heavy solids so no oil is wasted, the water is clean enough to be continually used and the heavy solids can be used for industrial applications like road base, fill dirt... Since QH2O does not use filters, membranes, manifolds, electrical probes, magnets... it does not require maintenance which solves another major problem in the industry. 
                                    </p>
                                    <blockquote>
                                        QH2O is a game changer for the oil industry and the environment.
                                    </blockquote>
                                    <p>
                                        Project has been completed and is slated for automated field production 2nd quarter 2020.
                                    </p>
                                    <p>
                                        For more information, please visit <a href="https://qh2oinc.godaddysites.com" target="_blank" rel="noreferrer" >www.qh2oinc.godaddysites.com </a>
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

export default BlogModal6;