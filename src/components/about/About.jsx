import React from "react";
import "./about.css";
import Qualification from "./Qualification";
import Skills from "./Skills";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="about__title">About Me</h2>
      <span className="about__subtitle">My Journey and Skills</span>

      <div className="about__container container grid">
        <Qualification />

        <Skills />
      </div>
    </section>
  );
}

export default About;
