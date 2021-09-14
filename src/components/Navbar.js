import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark topmenu">
            {/* .container */}
            <div className="container">
                    <a className="navbar-brand" href="index"><img className="logo" src="image/logo2_footer.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{outline : 'none !important'}}>
                        <FontAwesomeIcon icon={faBars} style={{color : '#fff', textDecorationLine : 'none', outline : 'none !important'}} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="index">Home</a>
                            </li>
                            <li className="nav-item" id="about">
                                <a className="nav-link" href="about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="experience">Experience</a>
                            </li>
                            <li className="nav-item" id="portfolio">
                                <a className="nav-link" href="portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
