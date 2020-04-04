import React from 'react';
//import { GTranslate } from "@material-ui/icons";
import './index.css';
import Folio from "../../component/folio";
//import Popup from "../../component/popup";
import { folio } from "../../asset/variable";

const Portfolio = () => {
    return (
        <section id="portfolio">

            <div style={{margin: 'auto'}} className="row section-intro">

                <div className="col-twelve">

                    <h5>Portfolio</h5>
                    <h1>Check Out Some of My Works.</h1>

                    <p className="lead">Here are the few project completed.</p>

                </div>
            </div>

            <div style={{margin: 'auto'}} className="row portfolio-content">

                <div class="col-twelve">

                    <Folio views={folio}/>
                </div>
            </div>

        </section>
    );
}

export default Portfolio;