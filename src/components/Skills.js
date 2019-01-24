import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const frontSkillsArr = [
  'React.js',
  'JavaScript (ES6)',
  'HTML5',
  'CSS',
  'Bootstrap',
  'Material UI',
  'jQuery'
];

const backSkillsArr = [
  'Node.js',
  'Express.js',
  'Passport.js',
  'Authentication',
  'SQL',
  'MySQL',
  'Sequelize.js',
  'MongoDB',
  'Firebase',
  'Heroku'
];

const styles = {
  rootDiv: {
    margin: 25
  },
  title: {
    fontSize: '3em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    margin: 20
  },
  section: {
    fontSize: '2em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
  },
  li: {
    listStyleType: 'none',
    fontSize: '1.5em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '600'
  },
  p: {
    fontSize: '1.5em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '600'
  }
};

function Skills(props) {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Technical Skills</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4" align='center'>
        <h3 style={styles.section}>Front</h3>
          <ul>
            {frontSkillsArr.map((skill, index) => {
              return (
                <li key={index} style={styles.li}>
                  <FontAwesomeIcon icon='arrow-right' />&ensp;
                  {skill}
                </li>
              );
            })}
          </ul>
          </div>
          <div class="col-6" align='center'>
          <h3 style={styles.section}>Back</h3>
          <ul>
            {backSkillsArr.map((skill, index) => {
              return (
                <li key={index} style={styles.li}>
                <FontAwesomeIcon icon='arrow-right' />&ensp;
                  {skill}
                </li>
              );
            })}
          </ul>
          </div>
        </div>
      </div>
  );
}

export default Skills;
