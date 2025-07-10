import React, { Component } from 'react';
import classes from './Education.module.css';
import { MdSchool, MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { motion } from 'framer-motion';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id="education">
        <motion.span 
          className={classes.head}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MY JOURNEY
        </motion.span>
        
        <section className={classes.container}>
          <div className={classes.row_md_12}>
            <div className={classes.timeline_centered}>
              <motion.article 
                className={classes.timeline_entry}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`${classes.timeline_icon} ${classes.schoolIcon}`}>
                  <MdSchool />
                </div>
                <div className={classes.label}>
                  <h2>
                    B.Tech in Computer Science <span>2021-2025</span>
                  </h2>
                  <p>
                    Currently pursuing my undergraduate degree in Computer Science and Engineering with AI/ML specialization from{' '}
                    <a href="http://abes.ac.in/" target="_blank" rel="noopener noreferrer">ABES Engineering College</a> with an overall CGPA of 7.0.
                  </p>
                  <div className={classes.skills}>
                    <span>Data Structures</span>
                    <span>Machine Learning</span>
                    <span>Web Development</span>
                  </div>
                </div>
              </motion.article>

              <motion.article 
                className={classes.timeline_entry}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className={`${classes.timeline_icon} ${classes.collegeIcon}`}>
                  <FaSchool />
                </div>
                <div className={classes.label}>
                  <h2>
                    Higher Secondary Education <span>2018-2019</span>
                  </h2>
                  <p>
                    Completed my 12th grade from SLML Inter College with major subjects in Physics, Chemistry, and Mathematics, achieving 75% in UP Board examinations.
                  </p>
                </div>
              </motion.article>

              <motion.article 
                className={classes.timeline_entry}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className={`${classes.timeline_icon} ${classes.workIcon}`}>
                  <MdWork />
                </div>
                <div className={classes.label}>
                  <h2>
                    ReactJS Internship <span>Winter 2024</span>
                  </h2>
                  <p>
                    Completed a two-month intensive internship at DevStrigX Technology, where I developed responsive web applications using ReactJS, Redux, and modern frontend technologies.
                  </p>
                  <div className={classes.skills}>
                    <span>ReactJS</span>
                    <span>Redux</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
