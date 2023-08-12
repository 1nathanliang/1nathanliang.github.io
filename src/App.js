import React, { Component } from 'react';
import './App.scss';

// Components
import NavComponent from './components/Navbar.js';
import BioComponent from './components/Bio.js';
import AboutComponent from './components/About.js';
import ResearchComponent from './components/Research.js';
import ProjectsComponent from './components/Projects.js';
import PressComponent from './components/Press.js';
import FooterComponent from './components/Footer.js';

// // Google Tag Manager
// import TagManager from 'react-gtm-module'
// const tagManagerArgs = {
//     gtmId: 'GTM-XXXXXX'
// }
// TagManager.initialize(tagManagerArgs)

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleUp, faBrain, faClock, faHeart, faInfoCircle, faSitemap, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faArrowAltCircleUp, faBrain, faClock, faHeart, faInfoCircle, faSitemap, faDownload, faFilePdf)

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering: null,
      width: window.innerWidth
    };
  }

  waiting () {
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount () {
    this.waiting().then(() => {
      const loader = document.getElementById('loader')
      if (loader) {
        loader.classList.add('available')
        setTimeout(() => {
          loader.outerHTML = ''
        }, 2000)
      }
    })
  }

  Intro = () => {
    return (
      <div id="intro-container">
        <img
          alt='nathan-liang-headshot.webp'
          id='propic'
          src={'./nathan-liang-headshot.webp'}
        />
        <div id="intro-container-2">
          <h2>
            <span id="my-name"><span>nathan liang</span></span>
            <sup><a href="https://translate.google.com/?ui=tob&sl=zh-CN&tl=en&text=%E6%A2%81" target="_blank" rel="noreferrer" style={{fontSize: '12px', textDecoration: 'none', color: 'white'}}>[?]</a></sup> 
            <sub><a href="https://www.npr.org/2021/06/02/996319297/gender-identity-pronouns-expression-guide-lgbtq" target="_blank" rel="noreferrer" style={{fontSize: '12px', textDecoration: 'none', color: 'white'}}>(he/him/his)</a></sub>
          </h2>
          <h3>psych phd @ cornell</h3>
        </div>
      </div>
    )
  }


  render() {
    return (
      <div className='App'>
        <div>
          <NavComponent/>
          <div className='AppSub'>
            {this.Intro()}
            <BioComponent/><br/>
            <AboutComponent/><br/>
            <ResearchComponent/><br/>
            <ProjectsComponent/><br/>
            <PressComponent/><br/>
          </div>
        </div>  
        <FooterComponent/>
      </div>
    );
  }
}
