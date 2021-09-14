import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faTv } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faGoogle);


const Services = () => {
    return (
        <div className="service-wrapper" id="myTabContent">
            <div className="container">
                <h1 className="service-h1">My Services</h1>
                <div className="row services">
                    <div className="col design service-box tab-pane fade show active" id="services" role="tabpanel" aria-labelledby="home-tab">
                        <div className="service-icon-box">
                            <FontAwesomeIcon icon={faTv} className="service-icon" />
                        </div>
                        <h6 className="service-heading">Web Design</h6>
                        <p className="service-text">I approach each project individually and always focus on the result</p>
                    </div>
                    <div className="col development service-box">
                        <div className="service-icon-box">
                            <FontAwesomeIcon icon={faFileCode} className="service-icon" />
                        </div>
                        <h6 className="service-heading">Web development</h6>
                        <p className="service-text">Your website will be build with a new proven technologies</p>
                    </div>
                    <div className="col smm service-box">
                        <div className="service-icon-box">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} className="service-icon" />
                        </div>
                        <h6 className="service-heading">Facebook Ads SMM</h6>
                        <p className="service-text">Your potential client will see your services or products on Facebook</p>
                    </div>
                    <div className="col ad service-box">
                        <div className="service-icon-box">
                            <FontAwesomeIcon icon={['fab', 'google']} className="service-icon" />
                        </div>
                        <h6 className="service-heading">Google Ads</h6>
                        <p className="service-text">Your service or product appeach at the top of Google search</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Services
