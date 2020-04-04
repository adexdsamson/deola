import React from 'react';
import {Facebook, Twitter, Instagram, LinkedIn} from '@material-ui/icons';
import './index.css';

const Intro = () => {
    return ( 
        <section id="intro">   

            <div className="intro-overlay"></div>	

            <div className="intro-content">
                <div style={{margin:" auto"}} className="row">

                    <div className="col-twelve">

                        <h5>Hello, World.</h5>
                        <h1>I'm Deola Adediran.</h1>

                        <p className="intro-position">
                            <span>Front-end Developer</span>
                            <span>Back-end Developer</span> 
                        </p>

                        <a style={{textDecoration: 'none'}} className="button stroke smoothscroll" href="#about" title="">More About Me</a>

                    </div>  
                    
                </div>   		 		
            </div> 

            <ul className="intro-social">        
                <li><a href="http://www.facebook.com/samsonadeola94">
                    <Facebook style={{fontSize: '32px'}}/></a></li>
                <li><a href='http://www.instagram.com/diran_deola'>
                    <Twitter style={{fontSize: '32px'}}/></a></li>
                <li><a href="http://www.instagram.com/diran_deola">
                    <Instagram style={{fontSize: '32px'}}/></a></li>
                <li><a href="https://www.linkedin.com/in/deola-adediran-632783a1">
                    <LinkedIn style={{fontSize: '32px'}}/></a>
                </li>
            </ul>      	

        </section> 

     );
}
 
export default Intro;