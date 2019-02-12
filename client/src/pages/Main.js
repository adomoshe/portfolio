import React from 'react';
import './Main.css';

import Nav from '../components/Nav';
import MainCarousel from '../components/Carousel';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Main = () => (
  <div className="container-fluid">
    <Nav />
    <MainCarousel />
    <About />
    <Skills />
    <Projects />
    <Education />
    <Experience />
    <Footer niki={true} />
  </div>
);

export default Main;
