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
            <h4 className="subtitle">My name is Onkar.</h4>
            <p>
              I am a Full Stack Developer based on west-central of India,
              Maharashtra.
            </p>
            <p>
              I really enjoy solving the problems as well as making things
              prettier and easy to use. I can't Stop Learning new things; the
              more, the Better :) I also Love Gaming , a hobby I'm taking along
              since Childhood; I have a passion for Puran Poli.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the Front-end I usually work with JavaScript, either
              standalone or including Popular Frameworks like Reactjs and
              Nextjs. I also make the web pretty using CSS and whenever needed,
              any of their friends: Bootstraps , tailblocks ,etc.
            </p>
            <p>
              For the Back-end I also work with JavaScript (NodeJS , Express ,
              MongoDB , etc) But Ofcourse, whenever the project Require SQL , I
              do mySQL , OracleSQL , etc.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a Gamer.</h4>
            <p>
              I Play and Build the games alot , I feel comfortable in developing
              games improving them , I Love working with Them.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I
              mentioned, creating pretty things is particularly important for
              me. me.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
