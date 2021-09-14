import React from 'react'
// import Data from './Data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileCode, faTv } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
    return (
        <div className="education-container">
            <div className="container">
                <h1 className="education-h1">Education </h1>
                <div className="row education">
                    <div className="col-sm-12 education-box school">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-md-6 bachelo">
                                <div className="card h-100 card-container">
                                    <div className="card-footer">
                                        <h5 className="card-title text-center text-white">Novena University Ogume </h5>
                                    </div>
                                    <div className="card-body bachelor">
                                        <p className="card-text text-white">Course: Computer Science</p>
                                        <p className="card-text text-white">Qualification: Bachelor's Degree</p>
                                        <p className="card-text text-white">Grade: Second Upper Division</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card h-100 card-container">
                                    <div className="card-footer">
                                        <h5 className="card-title text-center text-white">University of Central Missouri</h5>
                                    </div>
                                    <div className="card-body bachelor">
                                        <p className="card-text text-white">Course: Cybersecurity & Information Assurance</p>
                                        <p className="card-text text-white">Qualification: Master's Degree</p>
                                        <p className="card-text text-white">Grade: Merit  </p>
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

export default Education
