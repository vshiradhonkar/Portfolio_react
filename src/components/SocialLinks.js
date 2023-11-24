import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  return (
    
    <div className="social">
      <a
        href="https://twitter.com/Tweetved1"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <FontAwesomeIcon icon={faTwitter} />

      </a>
      <a
        id="profile-link"
        href="https://github.com/vshiradhonkar"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <FontAwesomeIcon icon={faGithub} />

      </a>
      
    </div>
  )
}

export default SocialLinks