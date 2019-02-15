import React, { Component } from 'react';

import bg from './img/background.jpg';
import crystal1 from './img/crystal1.png';
import crystal2 from './img/crystal2.png';
import crystal3 from './img/crystal3.png';
import crystal4 from './img/crystal4.png';

const crystalArr = [crystal1, crystal2, crystal3, crystal4];

const styles = {
  game: {
    marginTop: '10vh'
  },
  body: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  text: {
    color: 'white'
  },
  button: {
    margin: 'auto'
  },
  crystal: {
    display: 'block',
    marginBottom: '2vh'
  }
};

class Crystal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      playing: false,
      playerNumber: 0,
      goalNumber: 0,
      crystal1: 0,
      crystal2: 0,
      crystal3: 0,
      crystal4: 0
    };
    this.crystalClick = this.crystalClick.bind(this);
    this.startClick = this.startClick.bind(this);
  }

  componentWillMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }

  startClick() {
    console.log(this);
    this.setState({
      playing: true,
      goalNumber: Math.floor(Math.random() * 101 + 19),
      crystal1: Math.floor(Math.random() * 12 + 1),
      crystal2: Math.floor(Math.random() * 12 + 1),
      crystal3: Math.floor(Math.random() * 12 + 1),
      crystal4: Math.floor(Math.random() * 12 + 1)
    });
  }

  crystalClick({ target }) {
    if (!this.state.playing) {
      return;
    }
    const name = target.name;
    this.setState(state => ({
      playerNumber: (state.playerNumber += state[name])
    }));
    this.check();
  }

  check() {
    const goalNumber = this.state.goalNumber;
    const playerNumber = this.state.playerNumber;

    if (playerNumber === goalNumber) {
      this.setState(state => ({ wins: state.wins + 1 }));
      this.resetGame();
    } else if (playerNumber > goalNumber) {
      this.setState(state => ({ losses: state.losses + 1 }));
      this.resetGame();
    } else {
      return;
    }
  }

  resetGame() {
    this.setState({
      playing: false,
      playerNumber: 0,
      goalNumber: 0,
      crystal1: 0,
      crystal2: 0,
      crystal3: 0,
      crystal4: 0
    });
  }

  componentWillUnmount() {
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }

  render() {
    const wins = this.state.wins;
    const losses = this.state.losses;
    const goalNumber = this.state.goalNumber;
    const playerNumber = this.state.playerNumber;
    const playing = this.state.playing;

    return (
      <div className="row" style={styles.game}>
        <div className="col-sm-3" align="center">
          {crystalArr.map((crystalImg, index) => (
            <img
              name={'crystal' + (index + 1)}
              type="button"
              style={styles.crystal}
              src={crystalImg}
              key={index}
              alt="Crystal"
              onClick={this.crystalClick}
            />
          ))}
        </div>
        <div className="col-sm-6 text-center">
          <h3 style={styles.text}>{playing? '': `Wins: ${wins}`}</h3>
          <h3 style={styles.text}>{playing? '': `Losses: ${losses}`}</h3>
          <h3 style={styles.text}>{playing? `Goal Number: ${goalNumber}`: ''}</h3>
          <h3 style={styles.text}>{playing? `Player Number: ${playerNumber}`: ''}</h3>
          <br />
          <h2 style={styles.text}>Congrats!</h2>
          <h2 style={styles.text}>Oh No!</h2>
          <button
            style={styles.button}
            className="btn btn-primary"
            onClick={this.startClick}
          >
            Play Again?
          </button>
        </div>
        <div className="col-sm-3">
          <h2 style={styles.text}>Welcome to Crystal Collector!</h2>
          <br />
          <h3 style={styles.text}>Instructions:</h3>
          <p style={styles.text}>
            When pressed, each crystal adds a random number between 1-19 to
            "Your Total". That crystal will always add the same number until the
            game is over. To win, the player must figure out how to add "Your
            Total" such that it equals the "Goal" number. If "Your Total"
            exceeds the "Goal" number then the player losses. Once the player
            either wins or losses, then a "Play Again?" button will appear. If
            pressed, "Goal" and the crystals generate new numbers while a tally
            of wins and losses is kept. Good luck!
          </p>
        </div>
      </div>
    );
  }
}

export default Crystal;
