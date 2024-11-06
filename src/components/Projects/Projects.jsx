import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import solanaaid from '../images/solanaaid.png';
import monorepo from '../images/monorepo.png';
import courseApp from '../images/courseApp.png';
import github from '../images/github.png';

const webItem = [
  {
    link: 'https://adminpanelpage.netlify.app/',
    title: 'Admin Page',
    techStack: 'Tech Stack: React.js, D3.js, Chart.js, Node.js, Express.js',
    desc: (
      <ul>
        <li>Engineered a comprehensive admin page using React.js, integrating dynamic charts and graphs for seamless data visualization.</li>
        <li>Resolved over 10 errors during the integration of React.js components.</li>
      </ul>
    ),
    image: bookheap,
    color: '#E5E483',
    githubLink: 'https://github.com/rajchaudhary99/AdminHUB'
  },
  {
    link: 'https://multimart-ecommerce.onrender.com',
    title: 'Ecommerce',
    techStack: 'Tech Stack: React, Redux, Node.js, Express, MongoDB',
    desc: (
      <ul>
        <li>Integrated API to fetch and display 1000+ product details, resolving over 20 UI and development issues.</li>
        <li>Ensured smooth product data rendering across multiple screen sizes.</li>
      </ul>
    ),
    image: chess,
    color: '#d5ebda',
    githubLink: 'https://github.com/mittalsam98/ecommerce'
  },
  {
    link: 'https://weather-mate-taupe.vercel.app',
    title: 'Weather App',
    techStack: 'Tech Stack: React, OpenWeather API, Tailwind CSS',
    desc: 'Weather app providing real-time weather updates, forecasts, and additional information like wind speed and sunrise timings.',
    image: solanaaid,
    color: '#f3e4f1',
    githubLink: 'https://github.com/rajchaudhary99/Weather-Mate'
  },
  {
    link: 'https://fullstack-assignment-lyrx.vercel.app/',
    title: 'Fullstack Help Center',
    techStack: 'Tech Stack: React, Node.js, Express, MongoDB, Tailwind CSS',
    desc: 'Full-stack help center app with support tickets, FAQ, and live chat.',
    image: monorepo,
    color: '#f3e4f1',
    githubLink: 'https://github.com/rajchaudhary99/fullstack-Help_center'
  },
  {
    link: 'https://realschoolmanagementsystem.netlify.app/',
    title: 'School Management App using MERN',
    techStack: 'Tech Stack: MongoDB, Express, React, Node.js (MERN)',
    desc: 'School management system for student records, grades, and attendance.',
    image: courseApp,
    color: '#f3e4f1',
    githubLink: 'https://github.com/rajchaudhary99/School_management_system'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }} className={classes.cardItem}>
          <a href={cardItem.link} className={classes.card} target='_blank' rel="noopener noreferrer">
            <img src={cardItem.image} className={classes.cardImage} alt={cardItem.title} />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.cardTitleContainer}
          >
            <h3 className={classes.cardTitle}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.cardTitleImg} alt="GitHub" />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.container} id='projects'>
      <span className={classes.header}>MY WORK</span>
      <h2 className={classes.title}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item, index) => (
          <React.Fragment key={index}>
            {getProjectCard(item)}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
