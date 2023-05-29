import React from 'react'
import SocialLinks from './SocialLinks'
import styles from"../style/Menu.css"
function Menu(props) {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className={styles.overlay} />
      <div className={styles.menu_items}>
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks/>
      </div>
    </div>
  )
}

export default Menu