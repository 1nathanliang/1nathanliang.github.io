import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav} from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default class NavComponent extends Component {
  scrollToTop = () => {
      scroll.scrollToTop();
  };
  render() {
    return (
      <Navbar collapseOnSelect variant="dark" className="nav-custom fixed-top" expand="md">
        <Navbar.Brand id="brand-custom">
          <img src="nathanlogo.svg" alt="Nathan Liang personal logo design" id="logo-container"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="aboutComponent" spy={true} smooth={true} duration={500} className="animiddle" id="about">about</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="researchComponent" spy={true} smooth={true} duration={500} className="animiddle" id="research">research</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projectsComponent" spy={true} smooth={true} duration={500} className="animiddle" id="projects">projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="pressComponent" spy={true} smooth={true} duration={500} className="animiddle" id="press">press</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/1nathanliang/1nathanliang.github.io" target="_blank" className="pagetop">
              <FontAwesomeIcon icon="info-circle" />
            </Nav.Link>
            <Nav.Link onClick={this.scrollToTop} className="pagetop">
              <FontAwesomeIcon icon="arrow-alt-circle-up" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}