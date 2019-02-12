import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Blogs from './pages/blog/Blogs';
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

const App = () => 
   (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blogs} />
        <Route path="/games" component={Hangman} />
      </Switch>
    </Router>
  );

export default App;
