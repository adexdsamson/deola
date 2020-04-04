import React from 'react';
import profilepic from '../../asset/profile-pic.jpg';
import './index.css';


const About = () => {
    return ( 
        <section id="about"> 

            <div style={{margin: 'auto'}} className="row section-intro">
                <div className="col-twelve">

                    <h5>About</h5>
                    
                    <div className="intro-info">

                        <img src={profilepic} alt="Profile Picture"/>

                    </div>   			

                </div>   		
            </div>

            <div style={{margin: 'auto'}} className="row about-content">

                <div className="col-six tab-full">

                    <h3>Profile</h3>
                    <p className="lead">Deola Adediran is a Front-end developer with much knowledge in back-end development, Sound Engineer and also a business enthusiast, he studied Physics at Federal University of Agriculture. Deola is easy to relate with and an irrevocable personality, he thinks beyond the ordinary, always trying to beat the odds, he is a workaholic, inteligent, cool guy, focus and always pushing to win.</p>

                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span>Adeola Samson Adediran</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span>May 31, 1994</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>Freelancer, Frontend Developer, Fullstack Developer</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <span>adexdsamson@gmail.com</span>
                        </li>

                    </ul> 

                </div>

            

                <div className="col-six tab-full">

                    <h3>Skills</h3>

                    <ul class="skill-bars">
                        <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>HTML5</strong>
                        </li>
                        <li>
                            <div className="progress percent85"><span>85%</span></div>
                            <strong>CSS3</strong>
                        </li>
                        <li>
                            <div className="progress percent70"><span>70%</span></div>
                            <strong>BOOTSTRAP</strong>
                        </li>
                        <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>FIREBASE</strong>
                        </li>
                        <li>
                            <div className="progress percent35"><span>35%</span></div>
                            <strong>NODE JS</strong>
                        </li>
                        <li>
                            <div className="progress percent90"><span>90%</span></div>
                            <strong>REACTJS</strong>
                        </li>
                        <li>
                            <div className="progress percent95"><span>95%</span></div>
                            <strong>PWA</strong>
                        </li>
                        <li>
                            <div class="progress percent55"><span>55%</span></div>
                            <strong>EXPRESSJS</strong>
                        </li>

                    </ul>

                </div>
            
            </div>

            <div style={{margin: 'auto'}} class="row button-section">
                <div class="col-twelve">
                    <a style={{ textDecoration: 'none'}} href="#contact" title="Hire Me" class="button stroke smoothscroll">Hire Me</a>
                </div>   		
            </div>

        </section>
    );
}
 
export default About;