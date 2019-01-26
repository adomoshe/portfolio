import React from 'react';
import '../assets/css/Main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faHandPointer,
  faArrowRight,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import Nav from '../components/Nav';
import MainCarousel from '../components/Carousel';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

library.add(fab, faAt, faHandPointer, faArrowRight, faCode);

const Main = () => {
  return (
      <div class="container-fluid">
        <Nav />
        <MainCarousel />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Footer />
      </div>
  );
};

export default Main;
