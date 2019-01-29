import React, { Component } from 'react';
import './Hangman.css';

const styles = {

  body: {
    backgroundImage: url('./pulpfiction.jpg'),
    backgroundRepeat: no-repeat,
    backgroundSize: cover
  }
  
  [a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p]: {
    color: white;
  }
  
  #game {
    margin: 2vw;
  }
  

}

class Hangman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      remainingGuesses: 5,
      wordBeingGuessed: '',
      guessedLetters: '',
      userGuess: '',
      moviePick: '',
      correctUserGuesses: []
    };
    this.initial = this.initial.bind(this);
    this.guess = this.guess.bind(this);
  }

  movieList = [
    'Pulp Fiction',
    'Inglorious Basterds',
    'Reservoir Dogs',
    'The Hateful Eight',
    'Kill Bill',
    'Jackie Brown',
    'Django Unchained'
  ];

  componentDidMount() {
    document.addEventListener('keyup', this.initial);
  }

  initial(e) {
    console.log(e);
    if (e.code === 'Space') {
      //   document.getElementById('get-started').innerHTML = '';
      //   document.getElementById('game-over').innerHTML = '';
      this.start();
    }
  }

  start() {
    document.removeEventListener('keyup', this.initial);
    const pick = this.movieList[
      Math.floor(Math.random() * this.movieList.length)
    ];
    this.setState({
      moviePick: pick.toUpperCase()
    });
    console.log('Here it is... ', this.state.moviePick);
    this.stringGen();
    document.addEventListener('keyup', this.guess);
  }

  stringGen() {
    this.setState({ wordBeingGuessed: '' });
    letter: for (let i = 0; i < this.state.moviePick.length; i++) {
      for (let t = 0; t < this.state.correctUserGuesses.length; t++) {
        if (this.state.moviePick[i] === this.state.correctUserGuesses[t]) {
          this.setState(state => {
            state.wordBeingGuessed += state.correctUserGuesses[t] + ' ';
          });
          continue letter;
        }
      }
      if (i === this.state.moviePick.length - 1) {
        this.setState(state => {
          state.wordBeingGuessed += '_';
        });
      } else if (this.state.moviePick[i] === ' ') {
        this.setState(state => {
          state.wordBeingGuessed += '- ';
        });
      } else {
        this.setState(state => {
          state.wordBeingGuessed += '_ ';
        });
      }
    }
    // this.updateHTML();
  }

  guess(e) {
    if (this.screenInput(e)) {
      return;
    } else {
      this.logic();
    }
  }

  logic() {
    if (this.state.moviePick.indexOf(this.state.userGuess) === -1) {
      this.setState(state => {
        state.remainingGuesses--;
      });
      this.setState(state => {
        state.guessedLetters += state.userGuess;
      });
      //   this.updateHTML();
      this.check();
    } else {
      this.setState(state => {
        state.correctUserGuesses.push(state.userGuess);
      });
      this.stringGen();
      this.check();
    }
  }

  screenInput(input) {
    try {
      if (input.keyCode < 65 || input.keyCode > 90) {
        if (input.code === 'Space') {
          throw input.code;
        } else {
          throw input.key;
        }
      } else {
        this.setState({ userGuess: input.key.toUpperCase() });
      }
    } catch (err) {
      alert(`${err} is an invalid key`);
      return true;
    }
    try {
      if (
        this.state.guessedLetters.indexOf(this.state.userGuess) !== -1 ||
        this.state.wordBeingGuessed.indexOf(this.state.userGuess) !== -1
      ) {
        throw this.state.userGuess;
      }
    } catch (err) {
      alert(`You already guessed ${err}!`);
      return true;
    }
    return false;
  }

  //   updateHTML(game) {
  //     document.getElementById('wins').innerHTML = `Wins: ${this.wins}`;
  //     document.getElementById('losses').innerHTML = `Losses: ${this.losses}`;
  //     if (game) {
  //       document.getElementById('word-being-guessed').innerHTML = '';
  //       document.getElementById('letters-already-guessed').innerHTML = '';
  //       document.getElementById('number-of-guesses').innerHTML = '';
  //       if (game === 'win') {
  //         document.getElementById('game-over').innerHTML =
  //           'Correct!<br/><br/>Press Space to play again';
  //       } else if (game === 'loss') {
  //         document.getElementById(
  //           'game-over'
  //         ).innerHTML = `The correct movie was ${
  //           this.moviePick
  //         }!<br/><br/>Press Space to play again`;
  //       }
  //     } else {
  //       document.getElementById(
  //         'word-being-guessed'
  //       ).innerHTML = this.wordBeingGuessed;
  //       document.getElementById(
  //         'letters-already-guessed'
  //       ).innerHTML = `You have already guessed: ${this.guessedLetters}`;
  //       document.getElementById('number-of-guesses').innerHTML = `You have ${
  //         this.remainingGuesses
  //       } guesses left`;
  //     }
  //   }

  check() {
    if (this.state.wordBeingGuessed.indexOf('_ ' && '_') === -1) {
      this.setState(state => {
        state.wins++;
      });
      //   this.updateHTML('win');
      this.resetGame();
    } else if (this.state.remainingGuesses === 0) {
      this.setState(state => {
        state.losses++;
      });
      //   this.updateHTML('loss');
      this.resetGame();
    }
  }

  resetGame() {
    this.setState({
      remainingGuesses: 5,
      wordBeingGuessed: '',
      guessedLetters: '',
      userGuess: '',
      moviePick: '',
      correctUserGuesses: []
    });
    document.removeEventListener('keyup', this.guess);
    document.addEventListener('keyup', this.initial);
  }

  render() {
    return (
      <div id="game">
        <h1>Hangman!</h1>
        <br />
        <h2>Tarantino Movies Edition</h2>
        <h3 id="get-started">Press Space to play!</h3>
        <h3 id="wins">Wins: {this.state.wins}</h3>
        <h3 id="losses">Losses: {this.state.losses}</h3>
        <br />
        <h2 id="game-over">Game Over</h2>
        <h3 id="word-being-guessed">{this.state.wordBeingGuessed}</h3>
        <br />
        <h4 id="letters-already-guessed">{this.state.guessedLetters}</h4>
        <h4 id="number-of-guesses">{this.state.remainingGuesses}</h4>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.initial);
    document.removeEventListener('keyup', this.guess);
  }
}

export default Hangman;
