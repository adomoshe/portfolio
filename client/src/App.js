import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import Blogs from './pages/blog/Blogs';
import GamesHome from './pages/games/GamesHome';
import Games from './pages/games/Games';
import Hangman from './pages/games/hangman/Hangman';


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faHandPointer,
  faArrowRight,
  faCode
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faAt, faHandPointer, faArrowRight, faCode);

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blogs} />
        <Route exact path="/games" component={GamesHome}>

                <Route path="/hangman" component={Hangman}></Route>
        </Route>
      </Switch>
      </div>
    </div>
  </Router>
);

export default App;
