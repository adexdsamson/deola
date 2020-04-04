import React, { Component } from 'react';
import { Row, Nav, NavDropdown} from 'react-bootstrap';
import './index.css';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <Row>
                    <div className="top-bar">

                        <div className="logo">
                            <a href="#">Adeola</a>
                        </div>

                        <Nav id="main-nav-wrap" as='ul'>
                            <NavDropdown title="Dropdown" className="main-navigation">
                                <NavDropdown.Item as='li' className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></NavDropdown.Item>
                                <NavDropdown.Item as='li'><a className="smoothscroll"  href="#about" title="">About</a></NavDropdown.Item>
						        <NavDropdown.Item as='li'><a className="smoothscroll"  href="#resume" title="">Resume</a></NavDropdown.Item>
                                <NavDropdown.Item as='li'><a className="smoothscroll"  href="#portfolio" title="">Portfolio</a></NavDropdown.Item>
                                <NavDropdown.Item as='li'><a className="smoothscroll"  href="#services" title="">Services</a></NavDropdown.Item>					
                                <NavDropdown.Item as='li'><a className="smoothscroll"  href="#contact" title="">Contact</a></NavDropdown.Item>	
                            </NavDropdown>
                        </Nav>
                    </div>
                </Row>
            </header>
         );
    }
}
 
export default Header;