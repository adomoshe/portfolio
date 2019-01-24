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

function Experience(props) {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Experience</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            IT Recruiter, Sep '17 - Feb ’18 Kforce - San Ramon, CA
            <br />
            Quickly familiarized with IT structure and terminology, gathering a
            strong understanding of the field
            <br />
            Focus on building deep relationships with dozens of senior IT
            professionals monthly to match their needs and interests for
            available roles at Fortune 500 companies in the SF Bay Area
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
