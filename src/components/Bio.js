import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class BioComponent extends Component {
  render() {
    function ArrowDown(socMed, label) {
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip>
              {label}
            </Tooltip>
          }
        >
          {socMed}
        </OverlayTrigger>
      );
    }
    return (
    <div>
      <Container>
        <div id="email-container">
          <code>
            nl453 &#123;at&#125; cornell &#123;dot&#125; edu
          </code>
        </div>
        <div id="soc-med-container">
          {ArrowDown(<a href='https://github.com/1nathanliang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='github'><FontAwesomeIcon icon={['fab', 'github']} size="2x"/></a>, "GitHub")}
          {ArrowDown(<a href='https://scholar.google.com/citations?hl=en&user=ArVElRwAAAAJ' target='_blank' rel='noreferrer nofollow' className='soc-med' id='gscholar'><i className='ai ai-google-scholar ai-2x'/></a>, "Google Scholar")}
          {ArrowDown(<a href='https://orcid.org/0000-0002-5308-6368' target='_blank' rel='noreferrer nofollow' className='soc-med' id='orcid'><FontAwesomeIcon icon={['fab', 'orcid']} size="2x"/></a>, "orcID")}
          {ArrowDown(<a href='https://www.researchgate.net/profile/Nathan_Liang3' target='_blank' rel='noreferrer nofollow' className='soc-med' id='researchgate'><FontAwesomeIcon icon={['fab', 'researchgate']} size="2x" /></a>, "ResearchGate")}
          {ArrowDown(<a href='https://www.linkedin.com/in/1nathanliang/' target='_blank' rel='noreferrer nofollow' className='soc-med' id='linkedin'><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>, "LinkedIn")}
          {ArrowDown(<a href='https://twitter.com/1nathan_liang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='twitter'><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></a>, "Twitter")}
          {ArrowDown(<a href='https://vis.social/@1nathan_liang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='mastodon'><FontAwesomeIcon icon={['fab', 'mastodon']} size="2x" /></a>, "Mastodon")}
          {ArrowDown(<a href='https://academictree.org/psych/tree.php?pid=807836' target='_blank' rel='noreferrer nofollow' className='soc-med' id='psychtree'><FontAwesomeIcon icon='sitemap' size="2x" /></a>, "PsychTree")}
          {ArrowDown(<a href='https://philpeople.org/profiles/nathan-liang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='philpeople'><i className='ai ai-philpapers ai-2x'/></a>, "PhilPeople")}
          {ArrowDown(<a href='https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=3530786' target='_blank' rel='noreferrer nofollow' className='soc-med' id='ssrn'><i className='ai ai-ssrn ai-2x'/></a>, "Social Science Research Network")}
          {ArrowDown(<a href='https://osf.io/zs8c7/' target='_blank' rel='noreferrer nofollow' className='soc-med' id='osf'><i className='ai ai-osf ai-2x'></i></a>, "Open Science Framework")}
          {ArrowDown(<a href='https://duke.academia.edu/1nathan_liang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='academia'><i className='ai ai-academia ai-2x'/></a>, "Academia")}
          {ArrowDown(<a href='https://https://soundcloud.com/nate-l-446358831' target='_blank' rel='noreferrer nofollow' className='soc-med' id='soundcloud'><FontAwesomeIcon icon={['fab', 'soundcloud']} size="2x" /></a>, "Soundcloud")}
          {ArrowDown(<a href='https://open.spotify.com/playlist/34oXMyzX6Mq08Ujqb4aNNI?si=8381ok0zS_yGnLacR7gRzQ' target='_blank' rel='noreferrer nofollow' className='soc-med' id='spotify'><FontAwesomeIcon icon={['fab', 'spotify']} size="2x" /></a>, "Spotify")}
          {ArrowDown(<a href='https://www.yelp.com/user_details?userid=ui0yDO5xSB-MQ852yFFr9A' target='_blank' rel='noreferrer nofollow' className='soc-med' id='yelp'><FontAwesomeIcon icon={['fab', 'yelp']} size="2x" /></a>, "Yelp")}
          {ArrowDown(<a href='https://stackoverflow.com/users/9501435/nathan-liang' target='_blank' rel='noreferrer nofollow' className='soc-med' id='stackoverflow'><FontAwesomeIcon icon={['fab', 'stack-overflow']} size="2x" /></a>, "Stack Overflow")}
        </div>
      </Container>
    </div>
    )
  }
}