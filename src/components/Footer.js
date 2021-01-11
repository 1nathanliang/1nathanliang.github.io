import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav } from 'react-bootstrap';

const FooterPage = () => {
  return (
    <Navbar className='footer-custom justify-content-center' expand='lg' style={{paddingTop: '20px'}}>
        <Nav>
          <p><strong>Coded with <FontAwesomeIcon icon='heart' style={{
            color:'#ff3377',
            fontSize: '6pt'}}/> Powered by <FontAwesomeIcon icon={['fab', 'react']} style={{
            color:'#61DBFB',
            fontSize: '7pt'
          }}/> + <FontAwesomeIcon icon={['fab', 'bootstrap']} style={{
            color:'#563d7c',
            fontSize:'7pt'
          }}/> </strong>
          <br />&copy; {new Date().getFullYear()} Nathan Liang. All rights reserved.
          <br />Background images: Unsplash & Nathan Liang.
          <br />Website designed and developed by Nathan Liang.</p>
        </Nav>
  </Navbar>
  );
}

export default FooterPage;
