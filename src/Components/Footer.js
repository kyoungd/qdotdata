import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="footer-social">
                                <li className="facebook">
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <i className="ri-facebook-line"></i>
                                    </a>
                                </li>
                                <li className="behance">
                                    <a href="https://www.behance.net/" target="_blank" rel="noreferrer" >
                                        <i className="ri-behance-line"></i>
                                    </a>
                                </li>
                                <li className="dribbble">
                                    <a href="https://dribbble.com/" target="_blank" rel="noreferrer" >
                                        <i className="ri-dribbble-line"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 text-end">
                            <p>&copy; {(new Date().getFullYear())} QDotData. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;