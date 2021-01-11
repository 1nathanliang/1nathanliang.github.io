import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll'

export default class PublicationsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id='publicationsComponent'>
          <div style={{paddingTop: '75px'}}/>
          <Container id='blackbox'>
              <Row id='divbox' className="justify-content-md-center" style={{color: 'rgb(86, 69, 214)'}}><strong>PUBLICATIONS</strong></Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD',
                fontSize: '16pt',
                paddingBottom: '1em'}}>
                <strong>In Prep</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD'}}>
                <ol>
                  <li>Gerdin, E., <strong>Liang, N. </strong>, & Kraft-Todd, G. (in prep). Dimensions of dehumanization: Integrating theoretical perspectives using exploratory factor analysis.</li>
                </ol>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#999999',
                fontSize: '16pt',
                paddingBottom: '1em'}}>
                <strong>Under Review</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD'}}>
                <ol>
                  <li>Murray, S., <strong>Liang, N.</strong>, Brosowsky, N.P.,
                      Schooler, J., & Seli, P. (2020, under review). What are the
                      benefits of mind wandering to creativity?</li>
                  <li>Sridhar, H.S., Kimble, A., King, M.M., Johnson, C.P., Shah, R.J.,
                      Dietzel, J.M., Yoo, C.H., Moreno, M.P., Pant, P., Edwards, J.A.,
                      Lester, R.L., Linares, A.R., Wong, K.E., Vandekerckhove, V., Suh,
                      Y.J., Stout, C.D., Stanback, I.E., Staley, T.G., Srivatsa, S.V.,
                      <strong> . . .</strong> Samanez-Larkin, G.R. (2019, under review).
                      Lower sleep variability associated with higher academic performance
                      across the semester in college students.</li>
              </ol>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#666666',
                fontSize: '16pt',
                paddingBottom: '1em'}}>
                <strong>Forthcoming</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12} style={{
                color: '#DDDDDD'}}>
                <ol>
                  <li>Hard, B. M., <strong>Liang, N.</strong>, Wong, M., &  Flusberg, S. J. (2020, forthcoming). Metaphors we teach by: Uncovering the structure of metaphorical lay theories of teaching. <em>Metaphor and the Social World</em></li>
              </ol>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
