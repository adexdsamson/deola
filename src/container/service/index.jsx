import React from 'react';
import Services from '../../component/service';
import {serv} from '../../asset/variable';
import './index.css';



const Service = () => {
    return ( 
        <section id="services">
            <div class="overlay"></div>
            <div style={{margin: 'auto', marginBottom:"5rem"}} class="row section-intro">
                <div class="col-twelve">

                    <h5>Services</h5>
                    <h1>What Can I Do For You?</h1>

                </div>   		
            </div> 

            <div style={{margin: 'auto'}} class="row services-content">
                    
                <Services views={serv}/>
                   
            </div>

        </section>
     );
}
 
export default Service ;