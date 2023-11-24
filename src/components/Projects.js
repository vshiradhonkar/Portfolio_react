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
            lately.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Todo list Web Application"
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/777b5029a8672e5f98eba25479cdf3a120783f34/src/images/Capture3.png"
            tech="React, js, css , Firebase"
            link="todolist-app1.web.app/"
            repo="https://github.com/vshiradhonkar/TodoListApp-react"
          >
            <small>Built using HTML , CSS + BootStrap & Backend</small>
            <p>This is a Login Page having admin Login Panel.</p>
          </Project>

          <Project
            title="E-commerce Web Application"
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/master/src/images/Capture4.png"
            tech="React, js, css , Firebase, stripe"
            link="clone-248c0.firebaseapp.com/"
            repo="https://github.com/vshiradhonkar/Amazon-clone"
          >
            <small>Built using HTML , CSS + Bootstrap & Js.</small>
            <p>
              A website which is totally made for making Calculation's Easier
              for Users.
            </p>
          </Project>

          <Project
            title="CAR Rental Web Application"
            img="https://raw.githubusercontent.com/07Onkar/My-Portfolio/master/src/images/Capture2.png" //Got these Images by Opening the images in new tab after publishing it to github
            tech="React, js, css , Firebase, EmailJS"
            link="vshiradhonkar.github.io/car-rental-app/"
            repo="https://github.com/vshiradhonkar/car-rental-app"
          >
            <small>
              Built using React , Firebase , EmailJS , JS , CSS, and HashRouter.
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
