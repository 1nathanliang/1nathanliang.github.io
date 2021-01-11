import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Element } from 'react-scroll'

class CvPage extends Component {
    toggleCv = (parameter) => {
        var cvpdf = document.getElementById('cvpdf');
        var cvbutton = document.getElementById('cvbutton');
        if (cvpdf.style.display === 'none') {
            cvpdf.style.display = 'block';
            cvbutton.innerHTML = 'Close Document';
        } else {
            cvpdf.style.display = 'none';
            cvbutton.innerHTML = 'View/Download Updated CV';
        }
    }
    render() {
      return (
        <React.Fragment>
          <Element id='contactComponent'>
            <Button variant='outline-light' onClick={this.toggleCv} id='cvbutton'
              style={{fontFamily: 'Source Sans Pro'}}>
              View/Download Updated CV</Button>
            <div id='cvpdf'>
              <object
                data='https://1nathanliang.github.io/cv.html'
                type='application/pdf'
                width='500'
                height='678'
              >
                <iframe
                  src='https://1nathanliang.github.io/cv.html'
                  width='500'
                  height='678'
                >
                <p>This browser does not support PDF!</p>
                </iframe>
              </object>
            </div>
        </Element>
      </React.Fragment>
    )
  }
}

export default CvPage;
