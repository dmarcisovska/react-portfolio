import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutubeSquare, faReact, faHtml5, faCss3Alt, faJs, faSass, faAngular, faGit, faPython, fa } from '@fortawesome/free-brands-svg-icons'


const About = () => {
    return (
        <>
            <section className=" mb-5 shadow-sm page-title">
                <div className="page-header d-flex justify-content-center  align-items-center">
                    <h1> About </h1>
                </div>
            </section>
            <Container>
                <Row>
                    <Col md={5} lg={3} className="p-4">
                        <div className="portrait-container">
                            <img src="../images/portrait.jpg" className="portrait"/>
                        </div>
                        <div className="icon-container d-flex justify-content-center mt-3">
                            <a href="https://www.linkedin.com/in/denisa-marcisovska/" target="_blank" className="text-center mr-2">  <FontAwesomeIcon icon={faLinkedin} /></a>

                            <a href="https://github.com/dmarcisovska" target="_blank">  <FontAwesomeIcon icon={faGithub} /></a>

                            <a href="https://www.youtube.com/channel/UCUD77wT8AYUhjEqBVGMFK0w" target="_blank">  <FontAwesomeIcon icon={faYoutubeSquare} /></a>

                        </div>

                    </Col>
                    <Col md={7} lg={9} className="p-4 about-section"  >
                        <h1 className='about-heading'> hello, I'm Denisa!</h1>  
                        <p>I’m a front end web developer with an interest for JavaScript, React, CSS and all things web development. I am fully committed to the philosophy of life-long learning and always spend time learning outside of work. I enjoy learning about new technolgies such as new web development techniques or machine learning. </p>
                        <p> When I am not learning I love walking, visting santa cruz, hanging out with my husband, playing with my 3 rescue cats, watching tv or reading.</p>
                        <p> I made this website using ReactJS and Bootstrap 5. Poke around my website. Check out some of my <a href='/projects'> projects </a>, <a href='/videos'> videos </a>, <a href='/blog'> blog entries</a> or use the <a href='/contact'> contact form </a> to say hi. 
                        </p>

                        <h2 className='skills-list-header'> skills</h2>
                        <ul className='skills-list bg-light p-3'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>ReactJS</li>
                            <li>Angular</li>
                            <li>SCSS</li>
                            <li>Machine Learning</li>
                            <li>Wordpress</li>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe Premiere Pro</li>
                            <li>Adobe Experience Manager</li>
                            <li>Responsive Web Design</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-4 p-4 skills'>
                <div className="skills-container d-flex justify-content-center">
                    <Row>
                        <Col xs={3} className="d-flex justify-content-center"> 
                            <FontAwesomeIcon icon={faReact} className="skills-icon"/>
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center"> 
                            <FontAwesomeIcon icon={faHtml5} className="skills-icon" />
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center">   
                            <FontAwesomeIcon icon={faCss3Alt} className="skills-icon" />
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center">  
                            <FontAwesomeIcon icon={faJs} className="skills-icon"  />
                        </Col>
                 
                      
                        <Col xs={3} className="d-flex justify-content-center">   
                            <FontAwesomeIcon icon={faSass} className="skills-icon" />
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center">    
                            <FontAwesomeIcon icon={faAngular} className="skills-icon" />
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center">     
                            <FontAwesomeIcon icon={faGit} className="skills-icon" />
                        </Col>
                        <Col xs={3} className="d-flex justify-content-center">  
                            <FontAwesomeIcon icon={faPython} className="skills-icon" />
                        </Col>
                    </Row>

                </div>
            </Container>

        </>
    )
}

export default About
