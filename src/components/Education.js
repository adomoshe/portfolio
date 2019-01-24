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

function Education(props) {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Education</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            University of California, Berkeley Extension, CA 2018-2019
            <br />
            Intensive 3.5 month full-stack web development bootcamp taught on
            location at UC Berkeley
            <br />
            University of Tampa, FL, 2014-2017
            <br />
            Graduated in 3 years earning a 3.73 GPA with an International
            Business Management degree and a minor in Economics
            <br />
            Universitat Autònoma de Barcelona, Spain, Jan - April '16
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
