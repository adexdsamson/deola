import React from 'react';
import profilepic from '../../asset/profile-pic.jpg';
import './index.css';


const About = () => {
    return (
      <section id="about">
        <div style={{ margin: "auto" }} className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>

            <div className="intro-info">
              <img src={profilepic} alt="Profile Picture" />
            </div>
          </div>
        </div>

        <div style={{ margin: "auto" }} className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <p className="lead">
              I'm the impresario. I pull together a sometimes surprising
              group of people to create something new and exciting. I'm most
              energized in situations where the boundaries of what people are
              allowed to do are fluid, and where all people need is a persuasive
              case for why their value will be multiplied on this new team I'm
            putting together. Start-up situations of any kind will call
              out the best in me -- not because I want to do all the work
              myself, but because I'm the one who picks the team and
              convinces all of the key contributors to sign on. This need not be
              at a new company, necessarily -- I'm equally adept at putting
              together new project teams within my current organization,
              because I know how to achieve the right mix of skills and
              experience. Wherever I am, I'm the "instigator."
            </p>

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
              <li>
                <strong>Email:</strong>
                <span>adediran.dbs@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="col-six tab-full">
            <h3>Skills</h3>

            <ul class="skill-bars">
              <li>
                <div className="progress percent90">
                  <span>90%</span>
                </div>
                <strong>HTML5</strong>
              </li>
              <li>
                <div className="progress percent85">
                  <span>85%</span>
                </div>
                <strong>CSS3</strong>
              </li>
              <li>
                <div className="progress percent80">
                  <span>80%</span>
                </div>
                <strong>BOOTSTRAP</strong>
              </li>
              <li>
                <div className="progress percent90">
                  <span>90%</span>
                </div>
                <strong>FIREBASE</strong>
              </li>
              <li>
                <div className="progress percent35">
                  <span>55%</span>
                </div>
                <strong>NODE JS</strong>
              </li>
              <li>
                <div className="progress percent100">
                  <span>100%</span>
                </div>
                <strong>REACTJS</strong>
              </li>
              <li>
                <div className="progress percent95">
                  <span>95%</span>
                </div>
                <strong>PWA</strong>
              </li>
              <li>
                <div class="progress percent55">
                  <span>55%</span>
                </div>
                <strong>EXPRESSJS</strong>
              </li>
              <li>
                <div class="progress percent55">
                  <span>55%</span>
                </div>
                <strong>GRAPHQL</strong>
              </li>
              <li>
                <div class="progress percent60">
                  <span>60%</span>
                </div>
                <strong>REACT-NATIVE</strong>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ margin: "auto" }} class="row button-section">
          <div class="col-twelve">
            <a
              style={{ textDecoration: "none" }}
              href="#contact"
              title="Hire Me"
              class="button stroke smoothscroll"
            >
              Hire Me
            </a>
          </div>
        </div>
      </section>
    );
}
 
export default About;