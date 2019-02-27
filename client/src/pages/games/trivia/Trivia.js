import React, { Component } from 'react';

import bg from './img/background.jpg';

// .btn {
//     margin: auto;
//     margin-bottom: 1rem;
// }

// .btn {
//     white-space: normal;
// }

// .navbar {
//     margin-bottom: 5%;
// }

// #card_bg {
//     opacity: 0.94;
// }

// .card {
//     width: auto;
//     height: auto;
//     margin-bottom: 4rem;
// }
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
    margin: 'auto',
    fontSize: '1.5rem',
    fontWeight: '900'
  },
  crystal: {
    display: 'block',
    marginBottom: '2vh'
  }
};

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.crystalClick = this.crystalClick.bind(this);
    this.startClick = this.startClick.bind(this);
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
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <h4 className="navbar-brand">Random Trivia!</h4>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center mx-auto">
              <div id="card_bg" className="card border-primary mb-3">
                <div id="timer" className="card-header text-white bg-primary">
                  Timer
                </div>
                <div className="card-body text-primary">
                  <h4 id="questionInsert" className="card-title" />
                  <div id="answersInsert" className="card-body" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Trivia;

var questions = [
  'How many licks does it officialy take to get to the center of a Tootsie Pop?',
  'What percent of American adults belive chocolate milk comes from brown cows?',
  "What is Bob Dylan's real name?",
  "The Center for Disease Control's (CDC) website has a section dedicated to?",
  "What does McDonald's refer to their frequent users as?",
  'What kills more people yearly than shark attacks?',
  'Under the Code of Hammurabi (Babylonian code of law in ancient Mesopotamia) bartenders that watered down beer were...'
];
// Answers array
var answers = [
  ['1', '364', '420', 'Just bite it', 'A lot!'],
  [
    '3',
    '2%',
    'Where does strawberry milk come from then?',
    '7%',
    "It doesn't?",
    "I don't drink milk",
    '14%'
  ],
  ['2', 'Dylan Bob', 'Robert Zimmerman', 'Jokerman'],
  ['1', 'Zombie Prepardness', 'Sex Addiction'],
  ['4', 'Guests', 'Customers', 'Fans', 'Heavy Users'],
  ['4', 'Vending machines', 'Selfies', 'Coconuts', 'All of the above'],
  [
    '1',
    'Punished by execution',
    'Fined',
    'When was beer even invented?',
    'Mesopowhaaat?',
    "Doesn't matter, I'll take 4!"
  ]
];
// Seconds to be used for timer
var seconds = 30;
// Var binding timer to   val to prevent speeding up caused by multiple instances
var timer, timer2;
// Keep track of times played so it won't exceed number of questions
var timesPlayed = -1;
// Keeps track of right and wrong answers
var right = 0;
var wrong = 0;

// Displays Start Game! button
$('#answersInsert').append(
  "<div class='row'><button type='button' id='startGame' class='btn btn-outline-primary btn-lg'>Start Game!</button></div>"
);
// When button is clicked startGame function is fired off
$('#startGame').on('click', startGame);

// Adds 1 to timesPlayed, empties previous buttons, renders new questions and answers,
// runs checkAnswer function when any button is clicked, invokes run function.
// If all questions have been displayed else statement invokes gameOver function.
function startGame() {
  console.log('timesPlayed: ' + timesPlayed);
  console.log('qlength: ' + questions.length);
  $('#timer').text('Time left: ' + seconds);
  clearInterval(timer2);
  timesPlayed++;
  if (timesPlayed < questions.length) {
    $('#answersInsert').empty();
    renderQA(questions[timesPlayed], answers[timesPlayed]);
    run();
  }
  if (timesPlayed === questions.length) {
    gameOver();
  }
}

// checkAnswer checks if the id of the button which has been dynamically inputted with the index in which it was entered is the same as the same as the 0 index of that answer array
// which is the correct answer. If it matches right++ if not then wrong++. Then invokes clearTimer and startGame functions.
$(document).on('click', '.movieBtn', checkAnswer);
function checkAnswer() {
  console.log('event.target.id: ' + event.target.id);
  console.log('answers[timesPlayed][0]: ' + answers[timesPlayed][0]);
  clearTimer();
  if (event.target.id == answers[timesPlayed][0]) {
    right++;
    shortTimer(true);
  } else {
    wrong++;
    shortTimer(false);
  }
}

// run clearInterval then setInterval to prevent multiple instances and sets the timerFun as the reoccuring function every second.
function run() {
  clearInterval(timer);
  timer = setInterval(timerFunc, 1000);
}

// timerFunc -- seconds and displays the new total on the screen everytime its called. If the seconds are zero then it adds a wrong, empties the buttons invokes cleaerTimer then startGame.
function timerFunc() {
  seconds--;
  $('#timer').text('Time left: ' + seconds);
  if (seconds === 0) {
    wrong++;
    clearTimer();
    shortTimer(false);
  }
}

// clearTimer uses clearInterval on timer then resets seconds to 30 and updates the html.
function clearTimer() {
  clearInterval(timer);
  seconds = 30;
  $('#timer').text('Time left: ' + seconds);
}

// shortTimer gets called whenever a movieBtn is pressed or timerFunc reaches 0.
// It resets the text in #timer and calls the startGame function after 3 seconds.
// Meanwhile it displays a correct or wrong message on the screen.
function shortTimer(boolean) {
  $('#answersInsert').empty();
  $('#timer').text('Timer');
  timer2 = setInterval(startGame, 3000);
  if (boolean === true) {
    $('#questionInsert').text('Correct!');
  }
  if (boolean === false) {
    $('#questionInsert').text('Better luck next time!');
  }
}

// renderQuestions pushes the next question to the html
// renderAnswers dynamically creates buttons for an array of answers that corresponds to the answer and pushes them to the html.
function renderQA(question, answer) {
  $('#questionInsert').text(question);
  for (var index = 1; index < answer.length; index++) {
    $('#answersInsert').append(
      "<div class='row'><button type='button' id=" +
        index +
        " class='movieBtn btn btn-outline-primary btn-lg'>" +
        answer[index] +
        '</button></div>'
    );
    console.log(index);
  }
}

// gameOver inserts Thanks for playing text to html, displays right and wrong values and clears the buttons.
function gameOver() {
  clearInterval(timer);
  clearInterval(timer2);
  $('#timer').text('Thanks for playing!');
  $('#questionInsert').text('Correct: ' + right + ' Wrong: ' + wrong);
  $('#answersInsert').empty();
  playAgain();
}

// Creates a playAgain button when it is called from the gameOver function which calls the reset function
function playAgain() {
  $('#answersInsert').append(
    "<div class='row'><button type='button' id='playAgain' class='btn btn-outline-primary btn-lg'>Play Again?</button></div>"
  );
  $('#playAgain').on('click', reset);
}

// reset function resets all relevant variables and calls the startGame function
function reset() {
  timesPlayed = -1;
  right = 0;
  wrong = 0;
  startGame();
}
