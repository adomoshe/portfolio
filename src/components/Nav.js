// import React, { Component } from 'react';

// class Nav extends Component {
//   render() {
//     return (
//       <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
//         <a class='navbar-brand' href='https://ado-portfolio.herokuapp.com/' rel="noopener noreferrer">
//           Ado
//         </a>
//         <button
//           class='navbar-toggler'
//           type='button'
//           data-toggle='collapse'
//           data-target='#navbarText'
//           aria-controls='navbarText'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//         >
//           <span class='navbar-toggler-icon' />
//         </button>
//         <div class='collapse navbar-collapse' id='navbarText'>
//           <ul class='navbar-nav mr-auto'>
//             <li class='nav-item'>
//               <a class='nav-link' href='https://github.com/adomoshe' target='_blank' rel="noopener noreferrer">
//                 Github
//               </a>
//             </li>
//             <li class='nav-item'>
//               <a class='nav-link' href='https://www.linkedin.com/in/adoranmoshe/' target='_blank' rel="noopener noreferrer">
//                 LinkedIn
//               </a>
//             </li>
//           </ul>
//           <span class='navbar-text'>Navbar text with an inline element</span>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Nav;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Ado
          </Typography>
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="white" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
