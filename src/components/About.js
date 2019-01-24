import React from 'react';

const styles = {
  rootDiv: {
    margin: 25
  },
  title: {
    // fontShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    fontSize: '3em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    margin: 20
  },
  p: {
    fontSize: '1.5em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '600'
  }
};

function About(props) {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Adoran Moshe</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            Full-stack web developer with experience in IT recruiting. Developed
            an interest in web development while recruiting in the field,
            finally realizing this passion by enrolling in the UC Berkeley
            Extension Coding Bootcamp. I greatly enjoy learning new technologies
            in depth while utilizing my new talents. I am eager to invest time
            and resources to further this new knowledge and skills to excel my
            career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
