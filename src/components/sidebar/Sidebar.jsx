import React from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

// Import your images
import logo from '../images/sam.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitterx.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const iconList = [
    { component: github, href: 'https://github.com/rajchaudhary99', name: 'GitHub' },
    { component: linkedin, href: 'https://www.linkedin.com/in/raj-vardhan-chaudhary-2b9070223/', name: 'LinkedIn' },
    { component: twitter, href: 'https://x.com/_RajChaudhary1', name: 'Twitter' },
    { component: instagram, href: 'https://www.instagram.com/raj_vardhan_chaudhary_99', name: 'Instagram' },
    { component: gmail, href: 'mailto:rajvardhanchaudhary666@gmail.com', name: 'Email' }
  ];

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="hashtag-container">
          
          <span className="topHashtag">#programmer_life</span>
          <span className="topHashtag">#hello_world</span>
          <span className="topHashtag">#coding</span>
        </div>

        <motion.div
          className="avatar-container"
          animate={{ y: [2, -2] }}
          transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={logo} className="profile-image" alt="Profile" />
        </motion.div>

        <p className="email">
          <a href="mailto:rajvardhanchaudhary666@gmail.com" className="email-link">
            rajvardhanchaudhary666@gmail.com
          </a>
        </p>

        <ul className="navigation">
          <li><Link to="/#projects" className="nav-link">Projects</Link></li>
          <li><Link to="/#about" className="nav-link">About</Link></li>
          <li><Link to="/#interest" className="nav-link">Interest</Link></li>
          <li><Link to="/#education" className="nav-link">Education</Link></li>
        </ul>

        <div className="social-icons">
          {iconList.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
              <img src={icon.component} alt={icon.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}