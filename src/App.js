import React, { Component } from 'react';
import './App.css';

// Components
import NavComponent from './components/Navbar.js';
import BioComponent from './components/Bio.js';
import AboutComponent from './components/About.js';
import ExperienceComponent from './components/Experience.js';
import PublicationsComponent from './components/Publications.js';
import ProjectsComponent from './components/Projects.js';
import PressComponent from './components/Press.js';
import CvComponent from './components/Cv.js';
import FooterComponent from './components/Footer.js';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faClock, faSitemap, faBrain, faInfoCircle, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faHeart, faClock, faSitemap, faBrain, faInfoCircle, faArrowAltCircleUp)

export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        hovering: null,
        width: window.innerWidth
      };
    }

    Intro = () => {
      return (
        <div style={{
        paddingTop: '50px'
        }}>
        <img
          alt='nathanliang_headshot'
          id='propic'
          src={'./nathanliang_headshot.jpg'}
        />
        <div style={{lineHeight: '75%'}}>
          <h2 style={{
            opacity: '.9',
            fontSize: '36px',
          }}>Nathan Liang</h2>
          <h2 style={{
            opacity: '.75',
            fontSize: '28px',
          }}>Cognition + Cog Neuro</h2>
          <h2 style={{
            opacity: '.5',
            fontSize: '24px',
          }}>Researcher @ Duke University</h2>
        </div>
      </div>
      )
    }

    Contact = () => {
      return (
       <div>
         <div style={{
             color: 'rgb(227, 172, 32)',
             fontSize: '18pt',
             fontFamily: 'Permanent Marker',
             opacity: '.5'
         }}>Let's get in touch!</div><p style={{
             color: 'white',
             fontSize: '12pt',
             fontFamily: 'Source Sans Pro'
         }}>nathan [dot] liang [at] duke [dot] edu</p>
       </div>
      )
    }

  render() {
    return (
      <div className='App'>
        <NavComponent />
        <div className='AppSub'>
          {this.Intro()}
          <BioComponent />
          <AboutComponent /><br/>
          <ExperienceComponent /><br/>
          <PublicationsComponent /><br/>
          <ProjectsComponent /><br/>
          <PressComponent /><br/>
          <div style={{paddingTop: '50px'}}/>
          {this.Contact()}
          <CvComponent /><br/>
        </div>
        <FooterComponent />
      </div>
     );
   }
 }
