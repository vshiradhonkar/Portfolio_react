import React from 'react'
import "../style/Navbar.css"
function Navbar(props) {
  return (
    <React.Fragment>
    <nav id="navbar">
      <div className="nav-wrapper">
        <p className="brand">
          Onkar
          <strong> Shiradhonkar</strong>
        </p>
        <a
        
          onClick={props.toggleMenu}
          className = {props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
        >
          <span />
        </a>
      </div>
    </nav>
  </React.Fragment>
  )
}

export default Navbar