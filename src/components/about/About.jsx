import React, { Component } from 'react';
import classes from './About.module.css';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>Raj Vardhan Chaudhary</b>. I am a passionate developer with experience in{' '}
            <b>Frontend</b> & <b>Full Stack</b> development as a <b>Software Developer Engineer</b>. I am very
            interested in developing new things that excite me a lot. :)
          </p>
          <p className={classes.br}>
            I love exploring new technologies, and as a practitioner, I stay on top of the latest trends. I strive to
            write every line of code to be more readable, accessible, and modular. My problem-solving mindset and active
            GitHub profile showcase my commitment to innovative and collaborative coding.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
