import React from 'react'

function SocialLinks() {
  return (
    <div className="social">
      <a
        href="https://twitter.com/07_onkar"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://github.com/07Onkar"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
      
    </div>
  )
}

export default SocialLinks