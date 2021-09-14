import React from 'react'
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
                            <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ overflowX: 'visible', backgroundColor: '#262626',
                                              backgroundImage:'radial-gradient( 50% 50% at top center, rgba(0, 0, 0, 0.66), #262626 )',
                                              backgroundSize: '120% 1000px, 100% auto',
                                              color:'#fff', borderBottom:'4px solid #ec5b53', cursor:'pointer' }}
                              contentArrowStyle={{ borderRight: '7px solid  #ec5b53' }}
                              date="2020 - 2021"
                              iconStyle={{ background: '#ec5b53', color: '#fff' }}
                            >
                              <h3 className="vertical-timeline-element-title">Mira Technologies Company Limited</h3>
                              <h4 className="vertical-timeline-element-subtitle">Lagos, Nigeria</h4>
                              <p>Software Engineer at Mira</p>
                              <h4 className="vertical-timeline-element-subtitle">Technologies: <span>React-Redux | PHP-Lavarel  | SQL-MonogoDB</span></h4>
                            </VerticalTimelineElement>


                            <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ overflowX: 'visible', backgroundColor: '#262626',
                                              backgroundImage:'radial-gradient( 50% 50% at top center, rgba(0, 0, 0, 0.66), #262626 )',
                                              backgroundSize: '120% 1000px, 100% auto',
                                              color:'#fff', borderBottom:'4px solid #ec5b53', cursor:'pointer' }}
                               contentArrowStyle={{ borderRight: '7px solid  #ec5b53' }}
                              date="2020 - 2018"
                              iconStyle={{ background: '#ec5b53', color: '#fff' }}
                            >
                              <h3 className="vertical-timeline-element-title">Softhub Engineering Co Limited</h3>
                              <h4 className="vertical-timeline-element-subtitle">Warri, Nigeria</h4>
                              <p>Software Engineer at Softhub</p>
                              <h4 className="vertical-timeline-element-subtitle">Technologies: <span>JavaScript | PHP | NodeJS | SQL</span></h4>
                            </VerticalTimelineElement>


                            {/* <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ overflowX: 'visible', backgroundColor: '#262626',
                                              backgroundImage:'radial-gradient( 50% 50% at top center, rgba(0, 0, 0, 0.66), #262626 )',
                                              backgroundSize: '120% 1000px, 100% auto',
                                              color:'#fff', borderBottom:'4px solid #ec5b53', cursor:'pointer' }}
                              contentArrowStyle={{ borderRight: '7px solid  #ec5b53' }}                
                              date="2008 - 2010"
                              iconStyle={{ background: '#ec5b53', color: '#fff' }}
                            >
                              <h3 className="vertical-timeline-element-title">Designer Tech Company Limited</h3>
                              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                              <p>
                                User Experience, Visual Design
                              </p>
                            </VerticalTimelineElement> */}


                            {/* <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ overflowX: 'visible', backgroundColor: '#262626',
                                              backgroundImage:'radial-gradient( 50% 50% at top center, rgba(0, 0, 0, 0.66), #262626 )',
                                              backgroundSize: '120% 1000px, 100% auto',
                                              color:'#fff', borderBottom:'4px solid #ec5b53', cursor:'pointer' }}
                              contentArrowStyle={{ borderRight: '7px solid  #ec5b53' }}
                              date="2006 - 2008"
                              iconStyle={{ background: '#ec5b53', color: '#fff' }}
                            >
                              <h3 className="vertical-timeline-element-title">Web Art Tech Company Limited</h3>
                              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                              <p>
                                User Experience, Visual Design
                              </p>
                            </VerticalTimelineElement> */}
                        </VerticalTimeline>
                    </div>
                </div>
              <br />
            </div>
        </div>
    )
}

export default Experience
