import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GamesHome from './GamesHome';
import Hangman from './hangman/Hangman';
import Crystal from './crystal/Crystal';
import Trivia from './trivia/Trivia';

import Footer from '../../components/Footer';

const Games = ({ match }) => (
  <Router>
    <Switch>
      <Route
        exact
        path={match.url}
        render={props => (
          <div>
            <GamesHome {...props}/>
            <Footer />
          </div>
        )}
      />
      <Route exact path={`${match.url}/hangman`} component={Hangman} />
      <Route exact path={`${match.url}/crystal_collector`} component={Crystal} />
      <Route exact path={`${match.url}/trivia`} component={Trivia} />
    </Switch>
  </Router>
);

export default Games;
