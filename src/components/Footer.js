import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav } from 'react-bootstrap';

const FooterPage = () => {
  const months = ["☃️ January", "💘 February", "☘️ March", "🐣 April", "🌸 May", "🌅 June", "🌄 July", "🌾 August", "🍁 September", "🎃 October", "🦃 November", "🎄 December"];
  const d = new Date();
  let month = months[d.getMonth()]
  return (
    <Navbar className='footer-container justify-content-center' expand='lg'>
      <Nav>
        <p>
          {/* Last updated {month} {new Date().getDate()}, {new Date().getFullYear()} */}
          Last updated {months[0]} 3, 2023
          <br />•&nbsp;•&nbsp;•
          <br />
            <strong>
              Coded with <FontAwesomeIcon icon="heart" size="sm" id="fa-heart"/> and powered by <FontAwesomeIcon icon={["fab", "react"]} id="react-logo"/> + <FontAwesomeIcon icon={["fab", "bootstrap"]} id="bootstrap-logo"/>
            </strong>
          <br />&copy; {new Date().getFullYear()} Nathan Liang. All rights reserved.
          <br />Background images: Unsplash & Nathan Liang.
          <br />Website designed and developed by Nathan Liang.
        </p>
      </Nav>
  </Navbar>
  );
}

export default FooterPage;
