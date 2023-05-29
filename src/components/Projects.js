import React from 'react';

const Projects = (props) => {
  const Project = (props) => {
    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'fas fa-chart-bar',
        node: 'fab fa-node-js',
    };

    const { title, img, tech: projectTech, link, repo } = props;

    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={img} alt={'Screenshot of ' + title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {projectTech.split(' ').map((t) => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {title}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. All of these were built during my
            CDAC adventure , where I've been coding for almost 7 months non-stop until I completed all the projects required to get my
            Full-Stack Developer certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Login Page"
            img="../images/Capture3.PNG"
            tech="js css react node"
            link="https://07onkar.github.io/calculatorjs/"
            repo="https://github.com/yagoestevez/anonymous-message-board"
          >
            <small>Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.</small>
            <p>This is a full-stack website that I made which lets the users read and post anonymous messages and replies.</p>
          </Project>

          <Project
            title="Stock Price Checker."
            img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/StockPriceChecker.jpg"
            tech="js node css"
            link="https://yagoestevez-stock-price-checker.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-stock-price-checker"
          >
            <small>Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug.</small>
            <p>Another full-stack website to check the current value of any requested stock in the market.</p>
          </Project>

          <Project
            title="Personal Library."
            img="https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/PersonalLibrary.jpg"
            tech="js node css"
            link="https://yagoestevez-personal-library.glitch.me/"
            repo="https://github.com/yagoestevez/fcc-personal-library"
          >
            <small>Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug.</small>
            <p>A full-stack website to store book titles and comments to each book into a remote database.</p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
