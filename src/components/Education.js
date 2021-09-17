import React from 'react'
import Data from '../Data/Education';

const Education = () => {
    return (
        <div className="education-container">
            <div className="container">
                <h1 className="education-h1">Education </h1>
                <div className="row education">
                    <div className="col-sm-12 education-box school">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {Data.map((datium ) => {
                                const {id, School, Course, Qualification, Grade} = datium;
                                    return(
                                        <div className="col-md-6 bachelo" key={id}>
                                            <div className="card h-100 card-container">
                                                <div className="card-footer">
                                                    <h5 className="card-title text-center text-white">{School}</h5>
                                                </div>
                                                <div className="card-body bachelor">
                                                    <p className="card-text text-white">Course: {Course}</p>
                                                    <p className="card-text text-white">Qualification: {Qualification}</p>
                                                    <p className="card-text text-white">Grade: {Grade}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
