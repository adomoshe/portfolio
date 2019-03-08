import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GamesHome from './GamesHome';
import Hangman from './hangman/Hangman';
import Crystal from './crystal/Crystal';
import Trivia from './trivia/Trivia';


const Games = ({ match }) => (
  <Router>
  <div>
  {console.log(match)}
    <Switch>
      <Route exact path={`${match.url}/hangman`} component={Hangman} />
      <Route exact path={`${match.url}/crystal_collector`} component={Crystal} />
      <Route exact path={`${match.url}/trivia`} component={Trivia} />
    </Switch>
    </div>
  </Router>
);

export default Games;
