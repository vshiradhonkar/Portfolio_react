import React from "react";
import "../style/About.css";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Vedant.</h4>
            <p>
              I am a Full Stack Developer based on west-central of India,
              Maharashtra.
            </p>
            <p>
              I really enjoy solving problems as well as making things
              prettier and easy to use. I can't stop learning new things; the
              more, the better :) I also love gaming, a hobby I've been passionate about since childhood.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
            For the front-end, I usually work with JavaScript, either
              standalone or including popular libraries like ReactJs. I also make the web visually appealing using CSS, and when needed,
              any of its friends like Bootstrap, etc.
            </p>
            <p>
            For the Back-end I also work with JavaScript (NodeJS , Express,
              etc) And Firebase sometimes But of course, whenever the project Require SQL , I
              do mySQL , etc.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a</h4>
            <p>
            I'm a dynamic tech enthusiast on a perpetual learning journey. I thrive in the realm of games, where creativity meets problem-solving.
            Beyond coding, I immerse myself in a world of diverse interests – from voracious reading and show-watching to exploring the depths of YouTube. 
            I even dabble in cooking! This eclectic mix fuels my well-rounded skills and an unyielding passion for innovation in every facet of my life.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
