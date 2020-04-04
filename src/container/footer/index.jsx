import React from 'react';
import './index.css';
import { Facebook, Twitter, Instagram, LinkedIn } from "@material-ui/icons";

const Footer = () => {
    return ( 
        <footer>
            <div class="row">

                <div class="col-six tab-full pull-right social">

                    <ul class="footer-social">        
                        <li><a href="http://www.facebook.com/samsonadeola94">
                            <Facebook /></a>
                        </li>
                        <li><a href='http://www.twitter.com/diran_adeola'>
                            <Twitter /></a>
                        </li>
                        <li><a href="http://www.instagram.com/diran_deola">
                            <Instagram /></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/deola-adediran-632783a1">
                            <LinkedIn /></a>
                        </li>
                    </ul> 
                        
                </div>

                <div class="col-six tab-full">
                    <div class="copyright">
                    <span>© Copyright  2020.</span> 	         	
                </div>		                  
                </div>

                <div id="go-top">
                    <a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
            </div>

            </div>      	
        </footer>
     );
}
 
export default Footer;