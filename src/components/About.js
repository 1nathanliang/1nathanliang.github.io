import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Element } from "react-scroll"

export default class AboutComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Element id="aboutComponent">
          <Container className="blackbox-container">
            <Row className="header-container justify-content-md-center">
              <strong>👋🏻&nbsp;&nbsp;about</strong>
            </Row>
            <Row>
              <Col xl={9}>    
                <div className="text-container">

                  Hey! I'm a <strong>1st-year psychology Ph.D. student</strong> at Cornell supervised by Professor Laura Niemi in the Applied Moral Psychology Lab. 
                  Previously, I was employed as a project manager in the 🦅 
                  <span className="bc-link"><a href="https://moralitylab.bc.edu/" target="_blank" rel="noreferrer"><strong> Morality Lab (Professor Liane Young) </strong></a></span>
                  and 
                  <span className="bc-link"><a href="https://sites.bc.edu/sisclab/" target="_blank" rel="noreferrer"><strong> Social Influence and Social Change Lab (Professor Gregg R. Sparkman) </strong></a></span>
                  in the Department of Psychology and Neuroscience at Boston College. 
                  
                  I work concurrently as a research coordinator for the
                  <span className="mit-link"><a href="https://cooperation.mit.edu/" target="_blank" rel="noreferrer"><strong> MiT Applied Cooperation Initiative (Professor David Rand & Dr. Erez Yoeli)</strong></a></span>.<br/><br/>
                  
                  Previously, I was a lab manager and research specialist in the 🐅 
                  <span className="princeton-link"><a href="https://psnlab.princeton.edu/" target="_blank" rel="noreferrer"><strong> Princeton Social Neuroscience Lab (Professor Diana I. Tamir) </strong></a></span>
                  working across the Princeton Neuroscience Institute and Department of Psychology at Princeton University.<br/><br/>
                  
                  I received my B.S. in psychology and minor in philosophy from Duke University in 2020, graduating early during the pandemic.
                  I primarily worked as a research assistant in the 🧢 
                  <span className="duke-link"><a href="https://www.mindatlargelab.com/"><strong> Mind at Large Lab (Professor Paul Seli) </strong></a></span>
                  and as a postgraduate research fellow in the 
                  <span className="duke-link"><a href="https://imclab.org"><strong> Imagination and Modal Cognition Lab (Professor Felipe De Brigard) </strong></a></span>
                  as well as the
                  <span className="duke-link"><a href="https://kenan.ethics.duke.edu/mad-lab/"><strong> Moral Attitudes and Decision-Making Lab (Professor Walter Sinnott-Armstrong)</strong></a></span>.<br/><br/>
                  
                  My research interests are diverse, but I'd currently describe it along two general axes: 
                  (1) open questions in moral psychology (particularly concerning the influence of social norms and moral emotions on our everyday judgment and decision-making); 
                  and (2) applying computational methods from machine learning and natural language processing to understand empathy and social connection. 
                  I also maintain a keen interest in the experimental philosophy of religion, especially as it interfaces with individuals' (meta)ethical beliefs. 
                  I have experience in data science, and I have freelanced as a UI/UX and graphic design artist for a startup.<br /><br />
                </div>   
              </Col>
              <Col xl={3}>
                <div id="cv-pdf">
                  <div id="circle-frame">
                    <object
                      data="https://drive.google.com/file/d/1JCn12je579qF1i20vW0z-YF-uR0RpRTE/preview"
                      type="application/pdf"
                      width="270"
                      height="360"
                    >
                      <iframe
                        title="Nathan Liang CV"
                        src="https://drive.google.com/file/d/1JCn12je579qF1i20vW0z-YF-uR0RpRTE/preview"
                        width="270"
                        height="360"
                        allow="autoplay"
                      >
                      <p>This browser does not support PDF!</p> 
                      </iframe>
                    </object>
                  </div>
                  <br/>
                    <Button className="ft-btn download-btn" size="sm">
                      <a href="https://drive.google.com/uc?export=download&id=1JCn12je579qF1i20vW0z-YF-uR0RpRTE" download><FontAwesomeIcon icon={["fa", "fa-download"]} />&nbsp;&nbsp;Resume</a>
                    </Button>
                    <Button className="ft-btn download-btn" size="sm">
                      <a href="https://drive.google.com/uc?export=download&id=1fuWo1dvRJcTrSUQ4ic4zmoHnlsUU9XQq" download><FontAwesomeIcon icon={["fa", "fa-download"]} />&nbsp;&nbsp;Academic CV</a>
                    </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Element>
      </React.Fragment>
    )
  }
}
