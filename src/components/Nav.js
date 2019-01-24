import React from 'react';
import IconButton from '@material-ui/core/Button';
import { Github, LinkedIn, Medium, Email } from './Buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  nav: {
    zIndex: '10',
    position: 'fixed',
    width: '100%',
    // paddingLeft: 20,
    paddingRight: '2vh'
    // background: 'transparent'
  },
  navBtns: {
    float: 'right'
  },
  navTitle: {
    fontSize: '2em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 5,
    padding: 0,
    color: 'white',
    float: 'left'
  }
};

function Nav(props) {
  return (
    <navbar style={styles.nav}>
      <IconButton aria-label="Homepage Link">
        <h3 style={styles.navTitle}>Ado</h3>
      </IconButton>
      <span className="nav-buttons" style={styles.navBtns}>
        <Github />
        <LinkedIn />
        <Medium />
        <Email />
      </span>
    </navbar>
  );
}

export default Nav;
