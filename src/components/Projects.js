import React from "react";
import Project from "./Project";
import todolistImage from "../images/project images/to-do-list.png";
import ecommerceImage from "../images/project images/e-commerce.png";
import carRentalImage from "../images/project images/car-rental.png";

const Projects = (props) => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Portfolio</h3>
          <p className="separator" />
          <p className="subtitle">
            Explore some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="TaskMate - Todo List App"
            img={todolistImage}
            tech="React, JavaScript, CSS, Firebase"
            link="https://todolist-app1.web.app/"
            repo="https://github.com/vshiradhonkar/TodoListApp-react"
          >
            <small>Built with HTML, CSS, Bootstrap, and Firebase for backend.</small>
            <p>
              This is a feature-rich Todo List app with user authentication,
              providing a seamless experience for managing tasks.
            </p>
          </Project>

          <Project
            title="E-Shop - E-commerce Platform"
            img={ecommerceImage}
            tech="React, JavaScript, CSS, Firebase, Stripe"
            link="https://clone-248c0.firebaseapp.com/"
            repo="https://github.com/vshiradhonkar/Amazon-clone"
          >
            <small>Developed using HTML, CSS, Bootstrap, and JavaScript.</small>
            <p>
              This is an interactive e-commerce platform that leverages Stripe
              for secure and efficient payment processing.
            </p>
          </Project>

          <Project
            title="CarGo - Car Rental App"
            img={carRentalImage}
            tech="React, JavaScript, CSS, Firebase, EmailJS"
            link="https://vshiradhonkar.github.io/car-rental-app/"
            repo="https://github.com/vshiradhonkar/car-rental-app"
          >
            <small>
              Crafted with React, Firebase, EmailJS, JavaScript, CSS, and
              HashRouter.
            </small>
            <p>
              CAR Rental is a user-friendly Car Rental app, offering convenient
              booking options for users.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};

export default Projects;
