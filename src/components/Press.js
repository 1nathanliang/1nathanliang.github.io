import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class PressComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='pressComponent'>
          <div style={{paddingTop: '75px'}}/>
          <Container id='blackbox'>
              <Row id='divbox' className="justify-content-md-center" style={{color: 'rgb(250, 128, 27)'}}><strong>PRESS</strong></Row>
            <Row>
              <Col md={12}>
              <a href="https://bassconnections.duke.edu/about/news/behind-stereotypes-magazine-covers-data-team-finds-surprises" target='_blank' className='regpresstext'>
              Bass Connections Press Release</a><br/>
            <a href="https://bassconnections.duke.edu/student-stories/nathan-liang" target='_blank' className='regpresstext'>Bass Connections Student Stories</a>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
