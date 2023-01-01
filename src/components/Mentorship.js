import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class MentorshipComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='mentorshipComponent'>
          <div style={{paddingTop: '75px'}}/>
          <Container id='blackbox'>
            <Row id='divbox' className="justify-content-md-center" style={{color: 'rgb(19, 194, 75)'}}>
              <strong>teaching + mentorship</strong>
            </Row>
            <Row>
              <div style={{
                  color: '#DDDDDD',
                  padding: '1.5em',
                }}>        
                {/* to be added! */}       
              </div>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
