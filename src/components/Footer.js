import React from 'react';

const styles = {
  rootDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '1.5vh',
    borderRadius: 10
  },
  title: {
    // fontShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    fontSize: '3em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    margin: '2vw'
  },
  p: {
    fontSize: '1.5em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '600'
  }
};

function Footer(props) {
  return (
    <footer style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Footer</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            Footer
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
