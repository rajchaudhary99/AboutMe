import React, { Component } from 'react';
import classes from './Education.module.css';
import { MdSchool, MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div className={classes.row_md_12}>
            <div className={classes.timeline_centered}>
              <article className={classes.timeline_entry}>
                <div className={classes.timeline_icon}>
                  <MdSchool />
                </div>
                <div className={classes.label}>
                  <h2>
                    Undergraduation at ABESEC <span>2021-2025</span>
                  </h2>
                  <p>
                    Currently I am pursuing my undergraduation in CSE (Computer Science and Engineering) with AIML from{' '}
                    <a href="http://sliet.ac.in/">ABESEC</a> with an overall 70%.
                  </p>
                </div>
              </article>
              <article className={classes.timeline_entry}>
                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                  <FaSchool />
                </div>
                <div className={classes.label}>
                  <h2>
                    Higher Education <span>2018-2019</span>
                  </h2>
                  <p>
                    I completed my higher education at SLML Inter College with major subjects in Physics, Chemistry, and
                    Maths, achieving 75% in the UP board.
                  </p>
                </div>
              </article>
              <article className={classes.timeline_entry}>
                <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                  <MdWork />
                </div>
                <div className={classes.label}>
                  <h2>Internship</h2>
                  <p>Completed a two-month internship in ReactJS with DevStrigX Technology.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
