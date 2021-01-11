import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';

export default class BioComponent extends Component {
  render() {
    return (
    <div>
      <Container style ={{
          color: 'white',
          paddingBottom: '25px',
          paddingTop: '10px'
        }}>
        <div style ={{
            paddingBottom: '15px'}}>
          <a href='https://github.com/1nathanliang' target='_blank' rel='noreferrer nofollow' className='socmed' id='github'><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href='https://scholar.google.com/citations?hl=en&user=ArVElRwAAAAJ' target='_blank' rel='noreferrer nofollow' className='socmed' id='gscholar'><i style={{fontSize: '16pt'}} className='ai ai-google-scholar' /></a>
          <a href='https://orcid.org/0000-0002-5308-6368' target='_blank' rel='noreferrer nofollow' className='socmed' id='orcid'><FontAwesomeIcon icon={['fab', 'orcid']} /></a>
          <a href='https://www.researchgate.net/profile/Nathan_Liang3' target='_blank' rel='noreferrer nofollow' className='socmed' id='researchgate'><FontAwesomeIcon icon={['fab', 'researchgate']} /></a>
          <a href='https://www.linkedin.com/in/1nathanliang/' target='_blank' rel='noreferrer nofollow' className='socmed' id='linkedin'><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
          <a href='https://twitter.com/1nathan_liang' target='_blank' rel='noreferrer nofollow' className='socmed' id='twitter'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          <a href='https://academictree.org/psych/tree.php?pid=807836' target='_blank' rel='noreferrer nofollow' className='socmed' id='psychtree'><FontAwesomeIcon icon='sitemap' /></a>
          <a href='https://philpeople.org/profiles/nathan-liang' target='_blank' rel='noreferrer nofollow' className='socmed' id='philpeople'><i style={{fontSize: '16pt'}} className='ai ai-philpapers'/></a>
          <a href='https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3530786' target='_blank' rel='noreferrer nofollow' className='socmed' id='ssrn'><i style={{fontSize: '18pt'}} className='ai ai-ssrn'/></a>
          <a href='https://osf.io/zs8c7/' target='_blank' rel='noreferrer nofollow' id='osf'><i style={{fontSize: '18pt'}} className='socmed' id='ai ai-osf'></i></a>
          <a href='https://duke.academia.edu/1nathan_liang' target='_blank' rel='noreferrer nofollow' className='socmed' id='academia'><i style={{fontSize: '16pt'}} className='ai ai-academia'/></a>
          <a href='https://https://soundcloud.com/nate-l-446358831' target='_blank' rel='noreferrer nofollow' className='socmed' id='soundcloud'><FontAwesomeIcon icon={['fab', 'soundcloud']} /></a>
          <a href='https://open.spotify.com/playlist/34oXMyzX6Mq08Ujqb4aNNI?si=8381ok0zS_yGnLacR7gRzQ' target='_blank' rel='noreferrer nofollow' className='socmed' id='spotify'><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
          <a href='https://www.yelp.com/user_details?userid=ui0yDO5xSB-MQ852yFFr9A' target='_blank' rel='noreferrer nofollow' className='socmed' id='yelp'><FontAwesomeIcon icon={['fab', 'yelp']} /></a>
      </div>
        <Row id='intro'>
            What's up! I'm a research assistant in the <strong><a href='https://kenan.ethics.duke.edu/mad-lab/'
            target='_blank' rel='noreferrer nofollow' class='redlink'>
               Moral Attitudes and Decision-Making Lab</a></strong>
             <br/>
            with Dr. Walter Sinnott-Armstrong, the <strong><a href='https://www.imclab.org/' target='_blank' rel='noreferrer nofollow' class='greenlink'>Imagination and Modal Cognition Lab</a></strong>
            <br/>
            with Dr. Felipe de Brigard, and the <strong><a href='https://www.mindatlargelab.com/' target='_blank' rel='noreferrer nofollow' class='bluelink'>Mind at Large Lab</a></strong> with Dr. Paul Seli.
        </Row>
      </Container>
      </div>
    )
  }
}
