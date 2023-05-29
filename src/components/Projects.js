import React from "react";
import Project from "./Project";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on
            lately. All of these were built during my CDAC adventure, where I've
            been coding for almost 7 months non-stop until I completed all the
            projects required to get my Full-Stack Developer certification.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Login Page."
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/777b5029a8672e5f98eba25479cdf3a120783f34/src/images/Capture3.png"
            tech="js css react node"
            link="https://07onkar.github.io/Login-Page/"
            repo="https://github.com/07Onkar/Login-Page"
          >
            <small>Built using HTML , CSS + BootStrap & Backend</small>
            <p>
              This is a Login Page having admin Login Panel.
            </p>
          </Project>

          <Project
            title="Calculator."
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/master/src/images/Capture4.png"
            tech="js node css"
            link="https://07onkar.github.io/calculatorjs/"
            repo="https://github.com/07Onkar/calculatorjs"
          >
            <small>Built using HTML , CSS + Bootstrap & Js.</small>
            <p>
              A website which is totally made for making Calculation's Easier
              for Users.
            </p>
          </Project>

          <Project
            title="Car Rental."
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/master/src/images/Capture2.png" //Got these Images by Opening the images in new tab after publishing it to github
            tech="js node css"
            link="https://07onkar.github.io/carental-react/"
            repo="https://github.com/07Onkar/carental-react"
          >
            <small>
              Built using Node, React , JS CSS + Bootstrap, and HashRouter.
            </small>
            <p>
              Another Car Rental Website for users to book the Car for Rental
              from Anywhere.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
