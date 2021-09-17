import React from 'react';
import Service from '../Data/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileCode, faTv } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faGoogle);


const Services = () => {
    return (
        <div className="service-wrapper" id="myTabContent">
            <div className="container">
                <h1 className="service-h1">My Services</h1>
                <div className="row services">
                    {Service.map((ser) =>{
                        const {id, title, text, icon} = ser
                            return(
                                <div className="col design service-box tab-pane fade show active" id="services" role="tabpanel" aria-labelledby="home-tab" key={id}>
                                    <div className="service-icon-box">
                                        <FontAwesomeIcon icon={icon} className="service-icon" />
                                    </div>
                                    <h6 className="service-heading">{title}</h6>
                                    <p className="service-text">{text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Services
