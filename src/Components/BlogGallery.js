import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import blog1 from '../assets/img/blog/blog1.jpg';
import blog2 from '../assets/img/blog/blog2.jpg';
import blog3 from '../assets/img/blog/blog3.jpg';
import blog4 from '../assets/img/blog/blog4.jpg';
import blog5 from '../assets/img/blog/blog5.jpg';
import blog6 from '../assets/img/blog/blog6.jpg';

const BlogGallery = () => {
    return (
        <>
            <div className="container">
                <div className="row">

                    {/* Latest Blog 1 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal1"><img src={blog1} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal1">QALM - Our solution to micro-transaction</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 2 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal2"><img src={blog2} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal2">TOHI - Steward of Earth</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 3 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal3"><img src={blog3} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal3">QBANQ - Business as a Bank Solution</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 4 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal4"><img src={blog4} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal4">ANGELLINK - Transpancy in donation</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 5 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal5"><img src={blog5} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal5">QLAN - Efficient lighting and wireless mesh</Link>
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog 6 */}
                    <div className="blog-style-one mb-30 col-lg-4 col-md-6">
                        <div className="item">
                            <div className="thumb">
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal6"><img src={blog6} alt="Thumb" /></Link>
                            </div>
                            <div className="info">
                                <h4>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#blogSingleModal6">QH2O - Industrial scale of water purification</Link>
                                </h4>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default BlogGallery;