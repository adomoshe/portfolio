import React from 'react';
import IconButton from '@material-ui/core/Button';
import { Github, LinkedIn, Medium, Email } from './Buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  nav: {
    zIndex: '10',
    position: 'fixed',
    width: '100%',
    marginTop: 0,
    marginLeft: 0,
    paddingRight: '3vh'
  },
  navBtns: {
    float: 'right'
  },
  navTitle: {
    float: 'left',
    fontSize: '2em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    color: 'white',
  }
};

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <IconButton aria-label="Homepage Link">
        <h3 style={styles.navTitle}>Ado</h3>
      </IconButton>
      <span className="nav-buttons" style={styles.navBtns}>
        <Github />
        <LinkedIn />
        <Medium />
        <Email />
      </span>
    </nav>
  );
}

export default Nav;
