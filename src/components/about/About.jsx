import React, { Component } from 'react';
import classes from './About.module.css';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <span className={`${classes.head} ${classes.animatedText}`}>ABOUT ME</span>
        <h2 className={`${classes.heading} ${classes.animatedHeading}`}>
          <span className={classes.headingHighlight}>Who</span> Am I?
        </h2>
        <div className={classes.About}>
          <p className={classes.animatedParagraph}>
            Hi! My name is <b className={classes.nameHighlight}>Raj Vardhan Chaudhary</b>. I am a passionate developer with experience in{' '}
            <b className={classes.skillHighlight}>Frontend</b> & <b className={classes.skillHighlight}>Full Stack</b> development as a{' '} 
            <b className={classes.roleHighlight}>Software Developer Engineer</b>. I am very interested in developing new things that excite me a lot. <span className={classes.emoji}>✨</span>
          </p>
          <p className={`${classes.br} ${classes.animatedParagraph}`}>
            I love exploring new technologies <span className={classes.emoji}>🔍</span>, and as a practitioner, I stay on top of the latest trends. I strive to
            write every line of code to be more readable, accessible, and modular. My problem-solving mindset and active
            GitHub profile showcase my commitment to innovative and collaborative coding. <span className={classes.emoji}>🚀</span>
          </p>
        </div>
        <div className={classes.signature}>
          <div className={classes.signatureLine}></div>
          <div className={classes.signatureName}>Raj</div>
        </div>
      </div>
    );
  }
}

export default About;