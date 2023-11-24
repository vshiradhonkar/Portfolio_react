import React from 'react'
import SocialLinks from './SocialLinks'
import "../style/Footer.css"
function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Vedant Shiradhonkar.</p>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer