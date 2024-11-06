import React from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';

import logo from '../images/sam.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitterx.png';
import linkedin from '../images/linkedin.png';
import gmail from '../images/gmail.png';

export default function Sidebar() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const iconList = [
    {
      component: github,
      href: 'https://github.com/rajchaudhary99'
    },
    {
      component: linkedin,
      href: 'https://www.linkedin.com/in/raj-vardhan-chaudhary-2b9070223/'
    },
    {
      component: twitter,
      href: 'https://x.com/_RajChaudhary1'
    },
    {
      component: instagram,
      href: 'https://www.instagram.com/raj_vardhan_chaudhary_99'
    },
    {
      component: gmail,
      href: 'mailto:rajvardhanchaudhary666@gmail.com'
    }
  ];

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className='sidebar'>
      <div className='topHashtag'># programmer_life</div>
      <div className='topHashtag'># hello_world</div>
      <div className='topHashtag'># coding</div>
      <h1>
        <Link smooth to='/#start' className='h1_links'>
          Raj Vardhan Chaudhary
        </Link>
      </h1>
      <motion.div
        animate={{ y: [2, -2] }}
        transition={{ ease: 'linear', duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <img src={logo} className='my-img' alt='Profile' />
      </motion.div>
      <p className='gmail'>
        <a
          href='mailto:rajvardhanchaudhary666@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='fa fa-envelope'
        >
          rajvardhanchaudhary666@gmail.com
        </a>
      </p>

      <ul className='sidebar-nav'>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#projects' className='links'>
            Projects
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#about' className='links'>
            About
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#interest' className='links'>
            Interest
          </Link>
        </li>
        <li className='sidebar-nav-items'>
          <Link smooth to='/#education' className='links'>
            Education
          </Link>
        </li>
      </ul>

      <div className="social-media-container">
        <motion.ul
          className="social-media-icons"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {iconList.map((val, index) => (
            <motion.li key={index} variants={item}>
              <div className="icon-tooltip" data-tooltip={val.href.includes('github') ? 'GitHub' : val.href.includes('linkedin') ? 'LinkedIn' : val.href.includes('twitter') ? 'Twitter' : val.href.includes('instagram') ? 'Instagram' : 'Gmail'}>
                <img
                  onClick={() => window.open(val.href, '_blank')}
                  src={val.component}
                  className="icon-img"
                  alt="social media icon"
                />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
