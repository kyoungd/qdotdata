import React from 'react';
import Carousel from 'react-multi-carousel';
import logo1 from '../assets/img/logo/1.png'
import logo2 from '../assets/img/logo/2.png'
import logo3 from '../assets/img/logo/3.png'
import logo4 from '../assets/img/logo/4.png'
import logo5 from '../assets/img/logo/5.png'

const Brands = () => {
    return (
        <>
            <div className="brand-style-one-area text-center default-padding-top">
                <div className="container">
                    <div className="brand-style-one">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand5col swiper">
                                    <div className="swiper-wrapper align-center">
                                        <Carousel
                                            className="brands-carousel"
                                            infinite={true}
                                            draggable={true}
                                            pauseOnHover={true}
                                            autoPlay={true}
                                            arrows={false}
                                            slidesToSlide={1}
                                            swipeable={true}
                                            autoPlaySpeed={2000}
                                            responsive={{
                                                desktop: {
                                                    breakpoint: {
                                                        max: 3000,
                                                        min: 992
                                                    },
                                                    items: 5,
                                                },
                                                tablet: {
                                                    breakpoint: {
                                                        max: 991,
                                                        min: 577
                                                    },
                                                    items: 3,
                                                },
                                                mobile: {
                                                    breakpoint: {
                                                        max: 576,
                                                        min: 1
                                                    },
                                                    items: 2,
                                                },
                                                smallMobile: {
                                                    breakpoint: {
                                                        max: 480,
                                                        min: 1
                                                    },
                                                    items: 1,
                                                }
                                            }}
                                        >
                                            <div className="swiper-slide">
                                                <img src={logo1} alt="Thumb" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={logo2} alt="Thumb" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={logo4} alt="Thumb" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={logo5} alt="Thumb" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={logo2} alt="Thumb" />
                                            </div>
                                            <div className="swiper-slide">
                                                <img src={logo3} alt="Thumb" />
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

export default Brands;