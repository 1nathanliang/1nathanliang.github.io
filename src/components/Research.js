import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimateHeight from 'react-animate-height';


export default class ResearchComponent extends Component {

  render() {

    const bibs = [`
      @article{sridhar2019lower,
        title={Lower sleep variability associated with higher academic performance across the semester in college students},
        author={Sridhar, Harini Sri and Kimble, Aiyanna and King, Mia M and Johnson, Carlton P and Shah, Rema J and Dietzel, Jennifer M and Yoo, Christopher H and Moreno, Maria P and Pant, Praruj and Edwards, Jared A and others},
        publisher={PsyArxiv}
      }`,
      `
      @article{hard2021metaphors,
        title={Metaphors we teach by: Uncovering the structure of metaphorical lay theories of teaching},
        author={Hard, Bridgette Martin and Liang, Nathan and Wong, Michelle and Flusberg, Stephen J},
        journal={Metaphor and the social world},
        volume={11},
        number={1},
        pages={46--70},
        year={2021},
        publisher={John Benjamins}
      }`,
      `
      @article{murray2021,
        title={What are the benefits of mind wandering to creativity?},
        author={Murray, Samuel and Liang, Nathan and Brosowsky, Nicholaus and Seli, Paul},
        journal={Psychology of Aesthetics, Creativity, and the Arts},
        year={2021},
        publisher={Educational Publishing Foundation}
      }`
    ]   

    function siteButton(buttonClassName, iconClassName, link, linkText) {
      return (
        <Button className={buttonClassName} size="sm">
          <a href={link} target="_blank" rel="noreferrer">
            {iconClassName}<code>&nbsp;{linkText}</code>
            </a>
        </Button>
      );    
    }

    const Bibtex = (props) => {
      const [height, setHeight] = useState(0);
      return (
        <>
          <Button
            className="bib-btn"
            size="sm"
            aria-expanded={height !== 0}
            aria-controls="example-panel"
            onClick={() => {setHeight(height === 0 ? 'auto' : 0);}}
          >
            <i class="ai ai-overleaf ai-sm"/>&nbsp;<code>{height === 0 ? 'bibtex' : 'minimize'}</code>
          </Button>
          <AnimateHeight
            duration={750}
            height={height}
          >
            {props.children}
          </AnimateHeight>
        </>
      );
    };

    return (
      <React.Fragment>
        <Element id='researchComponent'>
          <Container className='blackbox-container'>
            <Row className='header-container justify-content-md-center'>
              <strong>⚗️&nbsp;&nbsp;research</strong>
            </Row>
            <Row>
              <Col md={12} className="subheading l1">
                <strong>2021</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ol>
                  <li>Murray, S., <strong>Liang, N.</strong>, Brosowsky, N., & Seli, P. (2021). What are the benefits of mind wandering to creativity? <em>Psychology of Aesthetics, Creativity, and the Arts</em>.</li>
                  <span className="btn-container">
                    {siteButton("ft-btn", <FontAwesomeIcon icon='file-pdf' size="sm" />, "https://github.com/1nathanliang/1nathanliang.github.io/blob/main/files/papers/murray2021benefits.pdf", "full-text pdf")}
                    {siteButton("doi-btn", <i class="ai ai-doi ai-sm"/>, "https://doi.org/10.1037/aca0000420", "doi")}
                    {siteButton("osf-btn", <i class="ai ai-osf ai-sm"/>, "https://osf.io/6jtch", "code + data")}
                    <Bibtex>
                      <pre>
                        {bibs[2]}
                      </pre>
                    </Bibtex>
                  </span>

                  <li>Hard, B. M., <strong>Liang, N.</strong>, Wong, M., &  Flusberg, S. J. (2021). Metaphors we teach by: Uncovering the structure of metaphorical lay theories of teaching. <em>Metaphor and the Social World</em>.</li>
                  <span className="btn-container">
                    {siteButton("ft-btn", <FontAwesomeIcon icon='file-pdf' size="sm" />, "https://github.com/1nathanliang/1nathanliang.github.io/blob/main/files/papers/hard2021metaphors.pdf", "full-text pdf")}
                    {siteButton("doi-btn", <i class="ai ai-doi ai-sm"/>, "https://doi.org/10.1075/msw.19021.har", "doi")}
                    {siteButton("osf-btn", <i class="ai ai-osf ai-sm"/>, "https://osf.io/6jtch", "code + data")}
                    <Bibtex>
                      <pre>
                        {bibs[1]}
                      </pre>
                    </Bibtex>
                  </span>
                </ol>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="subheading l2">
                <strong>under review</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ol>
                  <li>
                    Sridhar, H.S., Kimble, A., King, M.M., Johnson, C.P., Shah, R.J.,
                    Dietzel, J.M., Yoo, C.H., Moreno, M.P., Pant, P., Edwards, J.A.,
                    Lester, R.L., Linares, A.R., Wong, K.E., Vandekerckhove, V., Suh,
                    Y.J., Stout, C.D., Stanback, I.E., Staley, T.G., Srivatsa, S.V.,
                    . . .,<strong> Liang, N.</strong>, . . ., Samanez-Larkin, G.R. (2019, under review).
                    Lower sleep variability associated with higher academic performance
                    across the semester in college students.
                  </li>
                  <span className="btn-container">
                    {siteButton("rx-btn", <i className="ai ai-psyarxiv ai-sm"/>, "https://psyarxiv.com/6x8su/", "preprint")}
                    <Bibtex>
                      <pre>
                        {bibs[0]}
                      </pre>
                    </Bibtex>
                  </span>
                </ol>
              </Col>
            </Row>
            <Row>
              <Col className="subheading l3">
                <strong>in (various stages of) prep</strong>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <ol>
                  <li>
                    <strong>Liang, N.*</strong>, Grayson, S. J.*, Mildner, J. N., & Tamir, D. I. (in prep.). ”Call me, beep me, if you wanna reach me:” The impact of virtual social interaction on well-being during the COVID-19 pandemic.
                  </li>
                  <li>
                    <strong>Liang, N.*</strong>, Parikh, N.*, LaBar, K. S., & De Brigard, F. (in prep.). Impoverished episodic counterfactual simulation associated with increased anxiety.
                  </li>
                  <li>
                    Gerdin, E., <strong>Liang, N. </strong>, & Kraft-Todd, G. (in prep.). Dimensions of dehumanization: Integrating theoretical perspectives using exploratory factor analysis.
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
