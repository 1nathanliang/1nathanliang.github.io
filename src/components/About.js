import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class AboutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='aboutComponent'>
          <Container>
            <Row className='justify-content-md-center' style={{paddingBottom: '35px'}}>
                <span className='circledec'></span>
                <span className='circledec'></span>
                <span className='circledec'></span>
            </Row>
          </Container>
          <Container id='blackbox'>
            <Row id='divbox' className="justify-content-md-center" style={{color: 'rgb(19, 194, 75)'}}>
              <strong>ABOUT</strong>
            </Row>
            <Row>
              <div style={{
                  color: '#DDDDDD',
                  padding: '1.5em',
                }}>
                I'm a recent graduate of Duke University, where I studied
                psychology, neuroscience, linguistics, evolutionary anthropology,
                and philosophy with some phenomenal faculty and incredible
                research mentors. I am currently involved in research projects
                at the intersection of psychology and experimental philosophy,
                and I'm most interested in topics in moral psychology
                and normative ethics: dehumanization, cooperation,
                religiosity, causal reasoning, and empathy, to name a few. I am an
                enthusiastic advocate of robust, inclusive, and open science
                research practices, and I'm always looking for new opportunities
                to learn and grow as a cognitive scientist.
              </div>
            </Row>
            <Row>
              <div style={{
                  color: '#999999',
                  padding: '1.5em'
                }}>
                I have experience in data science and have freelanced as a UI/UX as
                and graphic design artist for a startup,
                ZenFoci, that I co-founded
                with a fellow Blue Devil. I continue to
                foster my creative interests in painting, drawing and
                illustration, as well as digital art. As you have probably surmised
                from the design of my site, I'm particularly fond of dark palettes.
                I've begun to dabble in music production as well, so hopefully this
                section will grow to become more substantial in the coming years.
              </div>
            </Row>
            <Row>
              <div style={{
                  color: '#666666',
                  padding: '1.5em',
                }}>
                In my free time, more than anything, I enjoy playing soccer. I
                relived my days as a high school varsity player
                at Duke and Johns Hopkins, and hopefully will
                continue to do so wherever
                life takes me. When I'm not on the pitch,
                you can expect to find me listening to punk rock or watching the
                latest sci-fi film.
              </div>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
