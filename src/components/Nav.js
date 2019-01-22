import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Github, LinkedIn, Medium, Email } from './Buttons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: '10',
    position: 'absolute',
    width: '100%',
    boxShadow: '0',
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    background: 'transparent',
    boxShadow: '0'
  },
  navTitle: {
      color: 'white'
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar style={styles.appBar}>
        <Toolbar style={styles.appBar}>
          <Button
            className={classes.menuButton}
            aria-label="Menu"
          >
            <MenuIcon style={styles.navTitle}/>
          </Button>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            <IconButton style={styles.navTitle}>Ado</IconButton>
          </Typography>
          <Github />
          <LinkedIn />
          <Medium />
          <Email />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
