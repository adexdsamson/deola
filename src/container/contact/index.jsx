import React from 'react';
import { Check } from "@material-ui/icons";
import './index.css';
import Info from '../../component/info';
import { info } from "../../asset/variable";

const Contact = () => {
    return ( 
        <section id="contact">
            <div style={{margin: 'auto'}} class="row section-intro">
                <div class="col-twelve">

                    <h5>Contact</h5>
                    <h1> Love To Hear From You.</h1>

                </div> 
            </div> 
            <div style={{margin: 'auto'}} class="row contact-form">

                <div style={{margin: 'auto'}} class="col-twelve">

                    
                    <form name="contactForm" id="contactForm" method="post" action="">
                        <fieldset>

                        <div class="form-field">
                            <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required=""/>
                        </div>
                        <div class="form-field">
                            <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
                        </div>
                        <div class="form-field">
                            <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
                        </div>                       
                        <div class="form-field">
                            <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""></textarea>
                        </div>                      
                        <div class="form-field">
                            <button class="submitform">Submit</button>
                            <div id="submit-loader">
                                <div class="text-loader">Sending...</div>                             
                                <div class="s-loader">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>
                            </div>
                        </div>

                        </fieldset>
                    </form> 

                
                    <div id="message-warning">           	
                    </div>            
                   
                    <div id="message-success">
                        <Check /> Your message was sent, thank you!<br/>
                    </div>

                </div> 
                
            </div> 

            <div style={{margin: 'auto'}} class="row contact-info">
                
                <Info views={info}/>
                
            </div>
        </section>
     );
}
 
export default Contact;