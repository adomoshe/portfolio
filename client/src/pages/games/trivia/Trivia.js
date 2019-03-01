import React, { Component } from 'react';

import bg from './bg.jpg';

const styles = {
  game: {
    marginTop: '10vh',
    marginBottom: '5vh'
  },
  body: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, .95)'
  },
  btn: {
    fontSize: '1.5rem',
    fontWeight: '900',
    margin: 'auto',
    marginBottom: '2vh',
    display: 'block'
  }
};

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      timer: 30,
      correct: 0,
      question: 0,
      display: false
    };
    this.click = this.click.bind(this);
  }

  componentWillMount() {
    for (let i in styles.body) {
      document.body.style[i] = styles.body[i];
    }
  }

  game = [
    [
      'How many licks does it officially take to get to the center of a Tootsie Pop?',
      ['364', '420', 'Just bite it', 'A lot!'],
      0
    ],
    [
      'What percent of American adults believe chocolate milk comes from brown cows?',
      [
        '2%',
        'Where does strawberry milk come from then?',
        '7%',
        "It doesn't?",
        "I don't drink milk",
        '14%'
      ],
      2
    ],
    [
      "What is Bob Dylan's real name?",
      ['Dylan Bob', 'Robert Zimmerman', 'Jokerman'],
      1
    ],
    [
      "The Center for Disease Control's (CDC) website has a section dedicated to?",
      ['Zombie Preparedness', 'Sex Addiction'],
      0
    ],
    [
      "What does McDonald's refer to their frequent users as?",
      ['Guests', 'Customers', 'Fans', 'Heavy Users'],
      3
    ],
    [
      'What kills more people yearly than shark attacks?',
      ['Vending machines', 'Selfies', 'Coconuts', 'All of the above'],
      3
    ],
    [
      'Under the Code of Hammurabi (Babylonian code of law in ancient Mesopotamia) bartenders that watered down beer were...',
      [
        'Punished by execution',
        'Fined',
        'When was beer even invented?',
        'Mesopowhaaat?',
        "Doesn't matter, I'll take 4!"
      ],
      0
    ]
  ];

  click({ target }) {
    if (target.innerHTML === 'Start Game') {
      this.setState({ playing: true, question: 1 });
      this.timerHandler();
    } else if (target.innerHTML === 'Play Again?') {
      this.setState({ playing: true, correct: 0, question: 1 });
      this.timerHandler();
    } else {
      this.checkAnswer(target.id);
    }
  }

  checkAnswer(index) {
    const parsedIndex = parseInt(index);
    const game = this.game;
    const question = this.state.question;
    this.timerHandler('stop');

    this.setState({ timer: 30 });

    this.timerHandler('short');

    if (game.length === question) {
      if (parsedIndex === game[question - 1][2]) {
        this.setState(state => ({
          correct: state.correct + 1
        }));
      }
      this.gameOver();
    } else {
      if (parsedIndex === game[question - 1][2]) {
        this.setState(state => ({
          correct: state.correct + 1,
          question: state.question + 1
        }));
      } else {
        this.setState(state => ({
          question: state.question + 1
        }));
      }
      this.timerHandler();
    }
  }

  timer;

  timerHandler(type) {
    switch (type) {
      case 'short':
        this.setState({ display: true });
        this.timer = setTimeout(() => {
          this.setState({ display: false });
        }, 5000);
        break;
      case 'stop':
        clearInterval(this.timer);
        break;
      default:
        this.timer = setInterval(() => {
          this.setState(state => ({ timer: state.timer - 1 }));
        }, 1000);
        break;
    }
  }

  gameOver() {
    this.setState({ playing: false });
  }

  componentWillUnmount() {
    for (let i in styles.body) {
      document.body.style[i] = null;
    }
  }

  render() {
    const playing = this.state.playing;
    const timer = this.state.timer;
    const correct = this.state.correct;
    const question = this.state.question;
    const game = this.game;
    const gameOver = game.length === question;

    return (
      <div className="row" style={styles.game}>
        <div className="col-sm-6 text-center mx-auto">
          <div className="card border-primary mb-3" style={styles.card}>
            <div className="card-header text-white bg-primary">
              <h4>
                {playing
                  ? `Timer: ${timer}`
                  : gameOver
                  ? 'Game Over'
                  : 'Very Random Trivia'}
              </h4>
            </div>
            <div className="card-body text-primary">
              {playing ? (
                <div>
                  <h3 className="card-title">{game[question - 1][0]}</h3>
                  <div className="card-body">
                    {game[question - 1][1].map((answer, index) => {
                      return (
                        <button
                          type="button"
                          className="btn btn-outline-primary btn-lg"
                          id={index}
                          key={index}
                          onClick={this.click}
                          style={styles.btn}
                        >
                          {answer}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  {gameOver && (
                    <div>
                      <h3 className="card-title">Thanks for Playing!</h3>
                      <br />
                      <h3 className="card-title">
                        You had {correct} out of {game.length} questions correct
                      </h3>
                    </div>
                  )}
                  <div className="card-body">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg"
                      onClick={this.click}
                      style={styles.btn}
                    >
                      {gameOver ? 'Play Again?' : 'Start Game'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trivia;
