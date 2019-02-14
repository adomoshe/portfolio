import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GamesHome from './GamesHome';
import Hangman from './hangman/Hangman';

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
    </Switch>
  </Router>
);

export default Games;
