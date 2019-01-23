import React from 'react';

const styles = {
    title: {
        fontSize: '4em',
        fontFamily: "'Poiret One', cursive",
        fontWeight: '900'
    },
    p: {
        fontSize: '2em',
        fontFamily: "'Poiret One', cursive",
        fontWeight: '600'

    }
}

function About(props) {
  return (
    <div class='row'>
      <h1 style={styles.title}>Adoran Moshe</h1>
      <p style={styles.p}>
        Full-stack web developer with experience in IT recruiting. Developed an
        interest in web development while recruiting in the field, finally
        realizing this passion by enrolling in the UC Berkeley Extension Coding
        Bootcamp. I greatly enjoy learning new technologies in depth while
        utilizing my new talents. I am eager to invest time and resources to
        further this new knowledge and skills to excel my career.
      </p>
    </div>
  );
}

export default About;
