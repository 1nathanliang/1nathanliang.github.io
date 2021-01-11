import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class NavComponent extends Component {
  scrollToTop = () => {
      scroll.scrollToTop();
  };
  render() {
    return (
      <Navbar className='nav-custom fixed-top' expand='lg'>
        <Navbar.Brand id='brand-custom'><img src='nathanlogo.svg'
          style={{height: '25px', width:'25px'}} alt='nathan_logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>
              <Link to='aboutComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='about'>about</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='experienceComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='experience'>experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='publicationsComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='publications'>publications</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='projectsComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='projects'>projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='pressComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='press'>press</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='contactComponent' spy={true} smooth={true} duration={1500} className='animiddle' id='contact'>contact + cv</Link>
            </Nav.Link>
          </Nav>
          <Nav inline>
            <Nav.Link href='https://github.com/1nathanliang/1nathanliang.github.io' target='_blank' id='pagetop'><FontAwesomeIcon icon='info-circle' /></Nav.Link>
            <Nav.Link onClick={this.scrollToTop} id="pagetop"><FontAwesomeIcon icon='arrow-alt-circle-up' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
