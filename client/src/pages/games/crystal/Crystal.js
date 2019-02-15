import React, { Component } from 'react';

import bg from './img/background.jpg';
import crystal1 from './img/crystal1.png';
import crystal2 from './img/crystal2.png';
import crystal3 from './img/crystal3.png';
import crystal4 from './img/crystal4.png';

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

const CrystalImg = ({ imgSource }) => (
  <img style={styles.crystal} src={imgSource} alt="Crystal" />
);

class Crystal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      playGame: true,
      playerNumber: 0,
      goalNumber: 0,
      diamondOne: 0,
      diamondTwo: 0,
      diamondThree: 0,
      diamondFour: 0
    };
  }

  componentWillMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }



  componentWillUnmount() {
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }

  render() {
    return (
      <div className="row" style={styles.game}>
        <div className="col-sm-3" align="center">
          <CrystalImg imgSource={crystal1} />
          <CrystalImg imgSource={crystal2} />
          <CrystalImg imgSource={crystal3} />
          <CrystalImg imgSource={crystal4} />
        </div>
        <div className="col-sm-6 text-center">
          <h3 style={styles.text} id="wins" />
          <h3 style={styles.text} id="losses" />
          <h3 style={styles.text} id="goalNumber" />
          <h3 style={styles.text} id="playerNumber" />
          <br />
          <h4 style={styles.text} id="winAlert">
            Congrats!
          </h4>
          <h4 style={styles.text} id="loseAlert">
            Oh No!
          </h4>
          <button
            style={styles.button}
            type="button"
            className="btn btn-primary"
            id="playAgain"
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
