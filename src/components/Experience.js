import React from 'react'
import Experiences from '../Data/Experience';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="container">
            <h1 className="experience-h1">Experience</h1>
              <br />
                <div className="row">
                    <div className="col-sm-12" style={{background:''}}>
                        <VerticalTimeline>
                          {Experiences.map((exp) => {
                            const {id, company, position, tech, location, date} = exp
                            return(
                              <VerticalTimelineElement key={id}
                              className="vertical-timeline-element--work"
                              contentStyle={{ overflowX: 'visible', backgroundColor: '#262626',
                                              backgroundImage:'radial-gradient( 50% 50% at top center, rgba(0, 0, 0, 0.66), #262626 )',
                                              backgroundSize: '120% 1000px, 100% auto',
                                              color:'#fff', borderBottom:'4px solid #ec5b53', cursor:'pointer' }}
                              contentArrowStyle={{ borderRight: '7px solid  #ec5b53' }}
                              date={date}
                              iconStyle={{ background: '#ec5b53', color: '#fff' }}
                            >
                              <h3 className="vertical-timeline-element-title">{company}</h3>
                              <h4 className="vertical-timeline-element-subtitle">{location}</h4>
                              <p>{position}</p>
                              <h4 className="vertical-timeline-element-subtitle">Technologies: <span>{tech}</span></h4>
                            </VerticalTimelineElement>
                            )
                          })
                          }
                        </VerticalTimeline>
                    </div>
                </div>
              <br />
            </div>
        </div>
    )
}

export default Experience
