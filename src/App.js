import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faHandPointLeft, faHandPointRight } from '@fortawesome/free-solid-svg-icons'
import Nav from './components/Nav.js';
import Carousel from './components/Carousel.js';

library.add(fab, faAt, faHandPointLeft, faHandPointRight )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Carousel />
      </div>
    );
  }
}

export default App;
