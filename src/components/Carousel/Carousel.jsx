import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown, FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Hello from '../images/Pencil.jpg';
import Pencil from '../images/Pencil.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start' className={classes.carouselContainer}>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1000}
        emulateTouch
        showArrows={true}
        autoPlay
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button 
              type="button" 
              onClick={onClickHandler} 
              title={label}
              className={`${classes.arrow} ${classes.arrowLeft}`}
            >
              <svg viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
              </svg>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button 
              type="button" 
              onClick={onClickHandler} 
              title={label}
              className={`${classes.arrow} ${classes.arrowRight}`}
            >
              <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          )
        }
      >
        <div className={classes.slide}>
          <div className={classes.imageOverlay}></div>
          <img className={classes.image} src={Hello} alt='Raj Vardhan Chaudhary' />
          <div className={classes.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={classes.heading}
            >
              <span className={classes.greeting}>Hello, I'm</span>
              <h1>Raj Vardhan Chaudhary</h1>
              <p className={classes.subtitle}>Full Stack Developer</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={classes.ctaContainer}
            >
              <motion.a
                href='https://drive.google.com/file/d/1OeOW1dU1KNF9TRnfiO7cLiKXnehRb1i6/view?usp=drive_link'
                rel='opener noreferrer'
                target='_blank'
                className={`${classes.ctaButton} ${classes.cvButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className={classes.buttonIcon} />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className={classes.slide}>
          <div className={classes.imageOverlay}></div>
          <img className={classes.image} src={Pencil} alt='Projects' />
          <div className={classes.content}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={classes.heading}
            >
              <h1>I Build Digital Experiences</h1>
              <p className={classes.subtitle}>That Make an Impact</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={classes.ctaContainer}
            >
              <motion.a
                href='https://github.com/rajchaudhary99'
                rel='opener noreferrer'
                target='_blank'
                className={`${classes.ctaButton} ${classes.projectsButton}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className={classes.buttonIcon} />
                View My Projects
              </motion.a>
            </motion.div>
          </div>
        </div>
      </Carousel>
      
      <div className={classes.scrollIndicator}>
        <div className={classes.mouse}>
          <div className={classes.scroller}></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </div>
  );
}