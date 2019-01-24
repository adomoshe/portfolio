import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faHandPointer,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Nav from './components/Nav';
import MainCarousel from './components/Carousel';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';


library.add(fab, faAt, faHandPointer, faArrowRight);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-fluid">
          <Nav />
          <MainCarousel />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
