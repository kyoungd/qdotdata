import React from 'react';
import { Link } from 'react-scroll';
import shape16 from '../assets/img/shape/16.png'
import illustration2 from '../assets/img/illustration/illustration2.jpg'

const Available = () => {
    return (
        <>
            <div className="work-available-area text-center box-layout bg-light default-padding">
                <div className="shape-right-top-mini">
                    <img src={shape16} alt="illustration" />
                </div>
                <div className="shape-illustration">
                    <img src={illustration2} alt="illustration" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="work-available">
                                <h2 className="title">We <strong>are</strong> available to <br /> help your business grow.</h2>
                                <Link className="btn btn-md circle btn-theme smooth-menu" to="contact">Hire us now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Available;