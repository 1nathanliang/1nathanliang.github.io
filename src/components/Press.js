import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class PressComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='pressComponent'>
          <Container className='blackbox-container'>
            <Row className='header-container justify-content-md-center'>
              <strong>📰&nbsp;&nbsp;press</strong>
            </Row>
            <Row>
              <Col md={12}>
                <div className="text-container">
                  <a href='https://bassconnections.duke.edu/about/news/behind-stereotypes-magazine-covers-data-team-finds-surprises' target='_blank' rel='noreferrer nofollow' className='regpresstext'>
                    Bass Connections Press Release
                  </a><br/>
                  <a href='https://bassconnections.duke.edu/student-stories/nathan-liang' target='_blank' rel='noreferrer nofollow' className='regpresstext'>Bass Connections Student Stories</a>
                </div>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}