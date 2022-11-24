import React from 'react';
import './Footer.css';
import twitterLogo from '../src/assets/Twitter_icon.png';
import fbLogo from '../src/assets/Facebook_icon.png';
import igLogo from '../src/assets/Instagram_icon.png';
import gitHubLogo from '../src/assets/GitHub_icon.png';

function Footer() {
  return (
    <div className="Footer__Container">
      <div>
        <img className="Footer__logo" src={twitterLogo} />
      </div>
      <div>
        <img className="Footer__logo" src={fbLogo} />
      </div>
      <div>
        <img className="Footer__logo" src={igLogo} />
      </div>
      <div>
        <img className="Footer__logo" src={gitHubLogo} />
      </div>
    </div>
  );
}

export default Footer;
