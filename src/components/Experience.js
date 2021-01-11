import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class ExperienceComponent extends Component {
  render() {
    return (
    <React.Fragment>
      <Element id='experienceComponent'>
        <div style={{paddingTop: '75px'}}/>
        <Container id='blackbox'>
            <Row id='divbox' className='justify-content-md-center' style={{color: 'rgb(39, 137, 207)'}}><strong>RESEARCH EXPERIENCE</strong></Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD',
                fontSize: '16pt',
              }}><strong>Current Positions</strong></Col>
            </Row>
            <Row>
            <Col md={10} style={{
                padding: '1.5em',
                color: '#DDDDDD',
                display: 'block'
              }}>Moral Attitudes and Decision-Making (MAD) Lab @ Duke University
            (Durham, NC)
              <br/>PI: Drs. Walter Sinnott-Armstrong & Jana Schaich Borg<br/>Fall 2020-
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <div className='researchlabel'>
                <br/><img src='x-phi.svg' className='researchicon' alt='experimental_philosophy'/>
                <div style={{width: '120px', marginTop: '90px', marginLeft: '20px'}}><p style={{color: 'white'}}>Experimental Philosophy</p></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#DDDDDD',
                padding: '1.5em',
              }}>Imagination and Modal Cognition (IMC) Lab @ Duke University
              (Durham, NC)<br/>PI: Dr. Felipe De Brigard<br/>Fall 2019-
            </Col>
            <Col md={1} style={{textAlign:'right'}}>
              <div className='researchlabel'>
                <br/><img src='x-phi.svg' className='researchicon' alt='experimental_philosophy'/>
                <div style={{width: '120px', marginTop: '90px', marginLeft: '-20px'}}><p style={{color: 'white'}}>Experimental Philosophy</p></div>
              </div>
            </Col>
            <Col md={1} style={{textAlign:'left'}}>
              <div className='researchlabel'>
                <br/><img src='cog-neuro.svg' className='researchicon' alt='cognitive_neuroscience'/>
                <div style={{width: '115px', marginTop: '90px', marginLeft: '-35px'}}><p style={{color: 'white'}}>Cognitive Neuroscience</p></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#DDDDDD',
                padding: '1.5em'
              }}>
              The Mind at Large Lab @ Duke University (Durham, NC)
              <br/>PI: Dr. Paul Seli<br/>Fall 2019-
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <br/>
                <div class='researchlabel'>
                  <img src='cog-psych.svg' className='researchicon' alt='cognitive_psychology'/>
                  <div style={{width: '105px', marginLeft: '22.5%'}}><p style={{color: 'white'}}>Cognitive Psychology</p></div>
                </div>
            </Col>
          </Row>
          <Row><Col md={12} style={{
              color: '#999999',
              fontSize: '16pt',
            }}><strong>Past Positions</strong></Col></Row>
          <Row>
            <Col md={10} style={{
                color: '#999999',
                padding: '1.5em'
              }}>
              Morality Lab @ Boston College (Chestnut Hill, MA)
              <br/>PIs: Drs. Liane Young & Gordon Kraft-Todd<br/>Summer 2020
              <ul>
                <li>2020 Remote Summer Internship</li>
              </ul>
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <br/>
              <div class='researchlabel'>
                <img src='pers-soc-psych.svg' className='researchicon' alt='personality_social_psychology'/>
                <div style={{width: '150px'}}><p style={{color: 'white'}}>Personality & Social Psychology</p></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#999999',
                padding: '1.5em'
              }}>
              Mind and Development (MaD) Lab @ Yale University (New Haven, CT)
              <br/>PI: Dr. Paul Bloom<br/>Summer 2020
              <ul>
                <li>2020 Remote Summer Internship</li>
              </ul>
            </Col>
            <Col md={1} style={{textAlign:'right'}}>
              <div className='researchlabel'>
                <br/><img src='dev-psych.svg' className='researchicon' alt='developmental_psychology'/>
                <div style={{width: '135px', marginTop: '90px', marginLeft: '-20px'}}><p style={{color: 'white'}}>Developmental Psychology</p></div>
              </div>
            </Col>
            <Col md={1} style={{textAlign:'left'}}>
              <div className='researchlabel'>
                <br/><img src='pers-soc-psych.svg' className='researchicon' alt='personality_social_psychology'/>
                <div style={{width: '150px', marginTop: '90px', marginLeft: '-35px'}}><p style={{color: 'white'}}>Personality & Social Psychology</p></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#999999',
                padding: '1.5em'
              }}>
              Vision Sciences Group @ Johns Hopkins University (Baltimore, MD)
              <br/> PIs: Drs. Jonathan Flombaum, Justin Halberda, & Chaz Firestone<br/>
              Summer 2019
              <ul>
                <li>2019 Mind and Vision Summer Research Internship</li>
              </ul>
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <br/>
                <div class='researchlabel'>
                  <img src='cog-psych.svg' className='researchicon' alt='cognitive_psychology'/>
                  <div style={{width: '105px', marginLeft: '22.5%'}}><p style={{color: 'white'}}>Cognitive Psychology</p></div>
                </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#999999',
                padding: '1.5em'
              }}>
              Behavioral Research Informing Teaching Excellence (BRITE) Lab @
              Duke University (Durham, NC)
              <br/>PI: Dr. Bridgette M. Hard<br/>Spring 2018-Fall 2020
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <br/>
              <div class='researchlabel'>
                <img src='pers-soc-psych.svg' className='researchicon' alt='personality_social_psychology'/>
                <div style={{width: '150px'}}><p style={{color: 'white'}}>Personality & Social Psychology</p></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{
                color: '#999999',
                padding: '1.5em'
              }}>
              Department of Psychology @
              Marist College (Poughkeepsie, NY)
              <br/>PI: Dr. C Ryan Kinlaw<br/>Fall 2014-Spring 2017
            </Col>
            <Col md={2} style={{textAlign:'center'}}>
              <br/>
              <div class='researchlabel'>
                <img src='pers-soc-psych.svg' className='researchicon' alt='personality_social_psychology'/>
                <div style={{width: '150px'}}><p style={{color: 'white'}}>Personality & Social Psychology</p></div>
              </div>
            </Col>
          </Row>
        </Container>
      </Element>
    </React.Fragment>
    )
  }
}
