import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import banner4 from '../assets/img/banner/4.jpg'

const BlogModal1 = () => {

    return (
        <>
            <div className="modal fade" id="blogSingleModal1" tabIndex="-1" aria-hidden="true">
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
                                        Qalm has been commissioned to create an innovative job app on a global basis aimed at resolving a currently unaddressed problem that touches almost everyone. "Micro Tasks". 
                                    </p>
                                    <p>
                                        A Micro Task is something that can be handled in minutes or hours if you just had someone in the geographic location where a problem needs to be resolved. Who has't seen a car on ebay, craigslist.. and wondered whether the offer you are seeing is actually real? With Qalm, app users can pickup work by handling the verification (wherever seller says it is located) by taking pictures, asking getting documents... or if you are traveling and you need someone to translate for a meeting, resolve an issue... There are literally millions of issues that arise every day where a micro job can resolve the need. 
                                    </p>
                                    <blockquote>
                                        However, according to a report by Transparency Market Research, the global micro-task market was valued at USD 1.5 billion in 2019 and is expected to grow at a CAGR of 17.6% from 2020 to 2030.
                                    </blockquote>
                                    <p>
                                        Project has been completed and is being presented to investors by its principals.
                                    </p>
                                    <p>
                                        For more info, please review <a href="https://qalm.news" target="_blank" rel="noreferrer" >www.qalm.news.</a>
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

export default BlogModal1;