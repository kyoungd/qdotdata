import React from 'react';

const ResumeTab = () => {
    return (
        <>
            <div className="tab-content resume-tab-content" id="nav-tabContent">

                {/* tab content 1 */}
                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="biography-table">
                                <li>
                                    <h5>Name</h5>
                                    <p>Istiak Ahmed</p>
                                </li>
                                <li>
                                    <h5>Birthday</h5>
                                    <p>24 March, 1994</p>
                                </li>
                                <li>
                                    <h5>Age</h5>
                                    <p> 29</p>
                                </li>
                                <li>
                                    <h5>Address</h5>
                                    <p>Street Oswego NY 13126 USA</p>
                                </li>
                                <li>
                                    <h5>Email</h5>
                                    <p>easton@gmail.com</p>
                                </li>
                                <li>
                                    <h5>Phone</h5>
                                    <p>+(778)33444564</p>
                                </li>
                                <li>
                                    <h5>Skype</h5>
                                    <p>program540</p>
                                </li>
                                <li>
                                    <h5>Freelance</h5>
                                    <p>Available</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* tab content 2 */}
                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                    <div className="row align-center">
                        <div className="col-lg-12">
                            <ul className="skill-table">
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="ri-android-fill"></i>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Andriod app development</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>75%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated" role="progressbar" data-width="75" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="ri-reactjs-fill"></i>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Front-End with React</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>84%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated2" role="progressbar" data-width="84" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style={{ width: "84%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row align-center">
                                        <div className="col-lg-2">
                                            <div className="icon">
                                                <i className="ri-html5-fill"></i>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <h4>Advance frontend development</h4>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="progress-box">
                                                <h5>92%</h5>
                                                <div className="progress">
                                                    <div className="progress-bar progress-bar-animated3" role="progressbar" data-width="92" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100" style={{ width: "92%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* tab content 3 */}
                <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="education-table">
                                <li>
                                    <h4>AS - Science & Information</h4>
                                    <h5>SuperKing College</h5>
                                    <span>2001 - 2005</span>
                                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                </li>
                                <li>
                                    <h4>BSc in Computer Science</h4>
                                    <h5>University of DVI </h5>
                                    <span>2006 - 2010</span>
                                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture. </p>
                                </li>
                                <li>
                                    <h4>Web Developer & Trainer</h4>
                                    <h5>Apple Developer Team</h5>
                                    <span>2012 - 2016</span>
                                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                </li>
                                <li>
                                    <h4>Sr. Software Engineer</h4>
                                    <h5>Google Out Tech</h5>
                                    <span>2017 - Present</span>
                                    <p>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeTab;