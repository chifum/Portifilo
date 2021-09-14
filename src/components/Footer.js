import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faTv } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-container" id="footer">
            <div className="container">
                <div className="row footer">
                    <div className="col-sm-4 contact-footer footer-box">
                        <div className="contact-container">
                            <div className="social-parents">
                                <p className="address">M.K.O Aboila Garden, Alausa, Ikeja</p>
                                <p className="phone">+234 703 537 2400</p>
                                <p className="email">chifum@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 menu-footer footer-box">
                        {/* <ul className="footer-left ul-box">
                            <li><a className="a-footer" href="home">Home</a></li>
                            <li><a className="a-footer" href="about">About</a></li>
                            <li><a className="a-footer" href="services">Services</a></li>
                        </ul>
                        <ul className="footer-right ul-box">
                            <li><a className="a-footer" href="experience">Experience</a></li>
                            <li><a className="a-footer" href="portifilo">Portifilo</a></li>
                            <li><a className="a-footer" href="contact">Contact</a></li>
                        </ul> */}
                    </div>
                    <div className="col-sm-4 social-footer footer-box">
                        {/* <ul className="social-media social-box">
                            <li className="social-children"><a href="https://facebook.com"><FontAwesomeIcon icon={faFileCode} style={{fontSize: '2rem'}} className="service-icon" /></a></li>
                            <li className="social-children"><a href="https://twitter.com"><FontAwesomeIcon icon={faFileCode} style={{fontSize: '2rem'}}  className="service-icon" /></a></li>
                            <li className="social-children"><a href="https://linkedIn.com"><FontAwesomeIcon icon={faTv} style={{fontSize: '2rem'}}  className="service-icon" /></a></li>
                            <li className="social-children"><a href="https://reddit.com"><FontAwesomeIcon icon={faTv} style={{fontSize: '2rem'}}  className="service-icon" /></a></li>
                            <p className="footer-alright">Copyright&copy;2021 | All Right Resvered</p>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
