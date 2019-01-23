import React from 'react';

const styles = {
  rootDiv: {
    margin: 25
  },
  title: {
    fontSize: '4em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    margin: 20
  },
  p: {
    fontSize: '2em',
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
        <div class="col-10">
          <p style={styles.p}>
            - React.js, JavaScript, ES6, HTML5, CSS, Bootstrap, Material UI,
            jQuery
            <br /> - Node.js, Express.js, Passport.js, Authentication, SQL,
            MySQL, Sequelize.js, MongoDB, Firebase, Heroku
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
