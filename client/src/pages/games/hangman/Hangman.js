import React, { Component } from 'react';
import bg from './pulpfiction.jpg';

const styles = {
  body: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  text: {
    color: 'white'
  },
  game: {
    margin: '2vw'
  }
};

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
  componentWillMount() {
    for (let i in styles.body) {
      console.log(styles.body)
      document.body.style[i] = styles.body[i];
    }
  }

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
      <div style={styles.game}>
        <h1 style={styles.text}>Hangman!</h1>
        <br />
        <h2 style={styles.text}>Tarantino Movies Edition</h2>
        <br />
        <h3 style={styles.text} id="get-started">Press Space to play!</h3>
        <h3 style={styles.text} id="wins">Wins: {this.state.wins}</h3>
        <h3 style={styles.text} id="losses">Losses: {this.state.losses}</h3>
        <br />
        <h2 style={styles.text} id="game-over">Game Over</h2>
        <h3 style={styles.text} id="word-being-guessed">{this.state.wordBeingGuessed}</h3>
        <br style={styles.text} />
        <h4 style={styles.text} id="letters-already-guessed">{this.state.guessedLetters}</h4>
        <h4 style={styles.text} id="number-of-guesses">{this.state.remainingGuesses}</h4>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.initial);
    document.removeEventListener('keyup', this.guess);
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }
}

export default Hangman;
