import React from 'react'

const About = () => {
    return (
        <div className="container-fluid-wrapper" id="about">
            <div className="container">
                <div className="row rows">
                    <div className="about-me-img col-sm-6 box">
                        <div className="img-container">
                            <img className="about-img" src="image/EmeriChifumPassport.jpg" alt="" />
                        </div>
                    </div>
                    <div className="about-me col-sm-6 box">
                        <h1 className="about-heading">About Me</h1>
                        <p className="about-text">
                         Skilled on full stack web developer eager to join a creative, problem solving team.
                         &#9830;Proficiency in HTML5, CSS3, JavaScript, React/Redux, PHP/Lavarel, NodeJS, Postgres/MySQL.
                         &#9830;Proper understanding of the DOM and a working knowledge of its manipulation.
                         &#9830; Version control with GIT and GITHUB.
                         &#9830; Creating good UI / UX with HTML, CSS, and preprocessors such as SCSS, and SASS.
                         &#9830; Good working Knowledge of CSS libraries and frameworks such as Tailwind CSS and MaterialUI.
                         &#9830; Experience with responsive and adaptive design.</p>
                        {/* <p className="about-text">
                            Skilled Ruby on Rails full stack web developer eager to join a creative, problem solving team. 
                            Ability to learn and implement new technologies quickly. 
                            My skills include HTML5, CSS3, JavaScript, React JS, PHP. 
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About
