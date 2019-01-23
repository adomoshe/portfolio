import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import Nav from './components/Nav';
import AdoCarousel from './components/Carousel';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

library.add(fab, faAt, faHandPointer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div class="container-fluid">
          <AdoCarousel />
          <About />
          <Skills />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
