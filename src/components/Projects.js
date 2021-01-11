import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class ProjectsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='projectsComponent'>
          <div style={{paddingTop: '75px'}}/>
          <Container id='blackbox'>
              <Row id='divbox' className='justify-content-md-center' style={{color: 'rgb(214, 24, 90)'}}><strong>PROJECTS</strong></Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD'}}>
                <a href='https://zenfoci.com/' target='_blank' rel='noreferrer nofollow' className='regprojtext'>ZenFoci by Incusublime, Inc.</a>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD'}}>
                <a href='https://bassconnections.duke.edu/project-teams/wired-learning-supporting-thinking-skills-k-2-classroom-2018-2019' target='_blank' rel='noreferrer nofollow' className='regprojtext'>
                Bass Connections: Wired for Learning
                </a>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <a href='https://bassconnections.duke.edu/project-teams/good-comes-bad-dreams-2020-2021' target='_blank' rel='noreferrer nofollow' className='regprojtext'>
                  Bass Connections: The Good that Comes from Bad Dreams</a>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <a href='https://www.dukechronicle.com/article/2017/12/ran-out-of-food-points-students-with-excess-explain-strategy' target='_blank' rel='noreferrer nofollow' className='regprojtext'>
                  <em>The Chronicle</em></a>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
