import React from 'react';
import { Title, ListItem } from './StyledTags';

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
  rootDiv: {},
  section: {
    fontSize: '2rem',
    fontWeight: '900'
  },
  p: {}
};

const Skills = () => {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <Title>Technical Skills</Title>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <h3 style={styles.section}>Front</h3>
          <ul>
            {frontSkillsArr.map((skill, index) => {
              return <ListItem key={index}>{skill}</ListItem>;
            })}
          </ul>
        </div>
        <div class="col-6">
          <h3 style={styles.section}>Back</h3>
          <ul>
            {backSkillsArr.map((skill, index) => {
              return <ListItem key={index}>{skill}</ListItem>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;