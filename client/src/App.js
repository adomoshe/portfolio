import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Hangman from './pages/games/Hangman';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path='/games/hangman' component={Hangman} />
        </Switch>
      </Router>
    );
  }
}

export default App;
