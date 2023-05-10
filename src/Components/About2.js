import React from 'react';
import illustration3 from '../assets/img/illustration/illustration3b.jpg'

const About2 = () => {
    return (
        <>
            <div name="about" className="about-style-six-area default-padding-top">
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-six col-lg-5">
                            <div className="thumb">
                                <img src={illustration3} alt="Thumb" />
                            </div>
                        </div>
                        <div className="about-style-six col-lg-6 offset-lg-1">
                            <h4 className="sub-title">About Us</h4>
                            <h2 className="title">Jim Pinto; Director</h2>
                            <p>
                                Mr. Pinto has over 30 years experience developing business in domestic and International environments, for the manufacture in: Automotive, Aerospace, Machining, Semiconductor, Electronics, Medical Devices, Environmental, Security Systems, and Consumer Products. During Mr. Pinto’s Career he has held positions as President, COO and Vice President of Business Development. Co-Founder of Compart Precision Technologies Group, Shenzhen China – Ultra Clean Manufacturing with 2000 CNC machines and 15,000 people, Mr. Pinto’s clients included; Boeing, Honeywell, Raytheon, Lockheed Martin, Northrop Grumman, Soto Metals Automotive, Teledyne, Allied Signal, Warner Technologies, Southwest Electric, NASA Lewis Research, GTE Sylvania, Kinetics, Cummings Aerospace, Solo Aerospace, International University Fund Moscow, Applied Materials, Lam, Matheson Tri-Gas, Unit Instruments, Seagate, Spearfish Economic Development Council, Broadway Singapore, Champion Investments–Automotive / Motorcycles, Harley Division, Indian Motorcycles, Yamaha, Honda, GM, Mitsubishi, Toyota, Tandex, Polaris, Icon Media Automotive Configurators, Whites Auto, Home Depot, Sears, Wall Mart, Cal-Tex Marketing. Author of White Paper “Hands On America”, Patent Holder #6,125,887, for Surface mounted integrated modules. Mr. Pinto held the office of  Chief Strategy Officer at Icon Interactive and currently holds several Board positions in the industry. Education: Stevens College - AB Accounting, New Hampshire College – BA – Accounting / Financing, Southern New Hampshire University – BS- Business, attended Boston College Law, Exchange Student McGill University, Canada, Toyota School of Lean Manufacturing, ISO Quality Training and Six Sigma, WFI-Hong Kong, International Banking, Training In Quality Management.
                            </p>
                            
                            <div className="skill-list">
                                <ul>
                                    <li>
                                        <p><a href="https://linkedin.com/in/jim-pinto-0b82b21" target="_blank" rel="noreferrer" >linkedin profile</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About2;