import React from 'react';
import shape14 from '../assets/img/shape/14.png'
import ResumeTab from './ResumeTab';

const Resume = () => {
    return (
        <>
            <div name="resume" className="resume-area default-padding-top">
                <div className="shape-right-top-extra">
                    <img src={shape14} alt="Shape" />
                </div>
                <div className="container">
                    <div className="experience-content-box">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="nav nav-tabs text-center resume-tab-navs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        Biography <strong>01</strong>
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        Skills <strong>02</strong>
                                    </button>
                                    <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                        Education <strong>03</strong>
                                    </button>
                                </div>
                                <ResumeTab />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume;