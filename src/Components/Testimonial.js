import React from 'react';
import team1 from '../assets/img/team/1.png'
import team2 from '../assets/img/team/2.png'
import shape15 from '../assets/img/shape/15.png'
import Carousel from 'react-multi-carousel';

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">My Expertise</h4>
                                <h2 className="title">Customers feedback</h2>
                                <div className="divider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="testimonial-style-one-box text-center">
                        <div className="row align-center">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="testimonial-style-one-carousel swiper">
                                    <div className="swiper-wrapper">
                                        <Carousel
                                            className="brands-carousel"
                                            infinite={true}
                                            draggable={true}
                                            pauseOnHover={true}
                                            autoPlay={false}
                                            arrows={false}
                                            slidesToSlide={1}
                                            swipeable={true}
                                            autoPlaySpeed={2000}
                                            responsive={{
                                                desktop: {
                                                    breakpoint: {
                                                        max: 3000,
                                                        min: 1
                                                    },
                                                    items: 1,
                                                }
                                            }}
                                        >
                                            {/* Testimonial 1 */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">
                                                        <div className="thumb">
                                                            <img src={team1} alt="Thumb" />
                                                            <div className="shape">
                                                                <img src={shape15} alt="Shape" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                “Targetingconsultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.”
                                                            </p>
                                                        </div>
                                                        <div className="provider">
                                                            <div className="info">
                                                                <h4>Istiak Ahmed</h4>
                                                                <span>Senior Consultant</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Testimonial 2 */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">
                                                        <div className="thumb">
                                                            <img src={team2} alt="Thumb" />
                                                            <div className="shape">
                                                                <img src={shape15} alt="Shape" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                “consultation discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.”
                                                            </p>
                                                        </div>
                                                        <div className="provider">
                                                            <div className="info">
                                                                <h4>Md Kamruzzaman</h4>
                                                                <span>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Testimonial 3 */}
                                            <div className="swiper-slide">
                                                <div className="testimonial-style-one">
                                                    <div className="item">

                                                        <div className="thumb">
                                                            <img src={team1} alt="Thumb" />
                                                            <div className="shape">
                                                                <img src={shape15} alt="Shape" />
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                “Business discover apartments. ndulgence off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now always remembering to the point.”
                                                            </p>
                                                        </div>
                                                        <div className="provider">
                                                            <div className="info">
                                                                <h4>Rakibul Alam </h4>
                                                                <span>Senior Developer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;