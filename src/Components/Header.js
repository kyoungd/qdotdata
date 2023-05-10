import React from 'react';
import MobileMenu from './MobileMenu';
import { Link } from "react-scroll";
// import ModalVideo from 'react-modal-video';
// import logoIcon from '../assets/img/logo-icon.png'
import logoIcon from '../assets/img/ll.webp'

const Header = () => {
    // const [isOpen, setOpen] = useState(false)
    return (
        <>
            <MobileMenu />
            <header className="header-fixed">
                <div className="f-flex">
                    <div className="logo">
                        <Link spy={true} to="/"><img src={logoIcon} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></Link>
                    </div>
                    <div className="menu">
                        <ul className="nav d-block">
                            <li>
                                <Link className="smooth-menu" spy={true} to="/">
                                    <i className="ri-home-smile-line"></i>
                                    <div className="menu-name">Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link className="smooth-menu" spy={true} to="services">
                                    <i className="ri-settings-2-line"></i>
                                    <div className="menu-name">Services</div>
                                </Link>
                            </li>
                            {/* <li>
                                <Link className="smooth-menu" spy={true} to="portfolio">
                                    <i className="ri-briefcase-4-line"></i>
                                    <div className="menu-name">Portfolio</div>
                                </Link>
                            </li> */}
                            <li>
                                <Link className="smooth-menu" spy={true} to="about">
                                    <i className="ri-user-3-line"></i>
                                    <div className="menu-name">About</div>
                                </Link>
                            </li>
                            {/* <li>
                                <Link className="smooth-menu" spy={true} to="resume">
                                    <i className="ri-file-text-line"></i>
                                    <div className="menu-name">Resume</div>
                                </Link>
                            </li> */}
                            <li>
                                <Link className="smooth-menu" spy={true} to="contact">
                                    <i className="ri-chat-1-line"></i>
                                    <div className="menu-name">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="video">
                        {/* <ModalVideo channel='youtube'
                            autoplay
                            isOpen={isOpen}
                            videoId="z7aqJpKfPC0"
                            onClose={() => setOpen(false)} />
                        <Link onClick={() => setOpen(true)}
                            className="popup-youtube video-play-button theme">
                            <i className="ri-play-line"></i>
                        </Link> */}
                    </div>

                </div>
            </header>
        </>
    );
};

export default Header;