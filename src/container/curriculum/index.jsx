import React from 'react';
//import { GTranslate } from "@material-ui/icons";
import './index.css';
import Cv from "../../component/cvSection";
import { work, Education } from "../../asset/variable";


const Curriculum = () => {
    return ( 
        <section id="resume" class="grey-section">

            <div style={{ margin: 'auto'}} class="row section-intro">

                <div class="col-twelve">

                    <h5>Resume</h5>
                    <h1>More of my credentials.</h1>

                    <p class="lead">For more details on Adeola Adediran.</p>

                </div>

            </div>

            <div style={{ margin: 'auto'}} class="row resume-timeline">

                <div class="col-twelve resume-header">

                    <h2>Work Experience</h2>

                </div>

                <div class="col-twelve">

                    <div class="timeline-wrap">

                       
                        <Cv 
                           views={work}
                        />
                      

                    </div>

                </div>

            </div>


            <div style={{ margin: 'auto'}} class="row resume-timeline">

                <div class="col-twelve resume-header">

                    <h2>Education</h2>

                </div>

                <div class="col-twelve">

                    <div class="timeline-wrap">

                        
                        <Cv 
                           views={Education}
                        />
                        

                    </div>

                </div>

            </div>

        </section>
     );
}
 
export default Curriculum;