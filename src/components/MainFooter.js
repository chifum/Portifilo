import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faLinkedin, faReddit);

const MainFooter = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <br/><br/>
                <div className="row footer">
                    <div className="col-sm-12 education-box school">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-md-4 bachelo">
                                <div className="card h-100" style={{border: 'none'}}>
                                    <div className="card-body bachelor">
                                        <p className="card-text text-white">M.K.O Aboila Garden, Alausa, Ikeja</p>
                                        <p className="card-text text-white">+234 703 537 2400</p>
                                        <p className="card-text text-white">chifum@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" >
                                <div className="card h-100" style={{border: 'none'}}>
                                    <div className="card-body menu-footer bachelor" >
                                        <ul className="footer-left ul-box">
                                            <li><a className="a-footer text-white" href="home">Home</a></li>
                                            <li><a className="a-footer text-white" href="about">About</a></li>
                                            <li><a className="a-footer text-white" href="services">Services</a></li>
                                        </ul>
                                        <ul className="footer-right ul-box">
                                            <li><a className="a-footer text-white" href="experience">Experience</a></li>
                                            <li><a className="a-footer text-white" href="portifilo">Portifilo</a></li>
                                            <li><a className="a-footer text-white" href="contact">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100" style={{border: 'none'}}>
                                    <div className="card-body social-footer  bachelor">
                                        <ul className="social-media social-box">
                                            <li className="social-children"><a href="https://web.facebook.com/chifum.emeri/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} style={{fontSize: '2rem', backgroundColor : '#4267B2', width : '35px', height : '30px'}}  className="service-icon"/></a></li>
                                            <li className="social-children"><a href="https://twitter.com/emy_chi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} style={{fontSize: '2rem', backgroundColor : '#1DA1F2', width : '35px', height : '30px'}}  className="service-icon" /></a></li>
                                            <li className="social-children"><a href="https://www.linkedin.com/in/chifum-emeri-728256193/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{fontSize: '2rem', backgroundColor : '#0077b5', width : '35px', height : '30px'}}  className="service-icon" /></a></li>
                                            <li className="social-children"><a href="https://reddit.com/chifvm" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'reddit']} style={{fontSize: '2rem', backgroundColor : '#ff4500', width : '35px', height : '35px'}}  className="service-icon" /></a></li>
                                        </ul>
                                         <div className="card-body alright">
                                             <p className="card-text text-white">Copyright&copy;2021 | All Right Resvered</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFooter
