import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faHandPointer, faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import Nav from './components/Nav';
import AdoCarousel from './components/Carousel';
import About from './components/About';

library.add(fab, faAt, faHandPointer, faHandPointLeft, faHandPointRight )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <AdoCarousel />
        <div class="container-fluid">
        <About />
        </div>
      </div>
    );
  }
}

export default App;
