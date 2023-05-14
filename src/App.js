import React, { Component } from 'react';
import Menu from './components/Menu';
import Nav from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./App.css"
import "./globalStyles.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuState: !prevState.menuState
        ? 'active'
        : prevState.menuState === 'deactive'
        ? 'active'
        : 'deactive'
    }));
  };

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.addEventListener('scroll', () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    });

    const navSmoothScrolling = () => {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    };

    navSmoothScrolling();
  }

  render() {
    return (
      <>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
