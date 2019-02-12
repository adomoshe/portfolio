import React from 'react';
import { Link } from 'react-router-dom';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Github, LinkedIn, Medium, Email } from './Buttons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  nav: {
    zIndex: '10',
    position: 'fixed',
    width: '100%',
    paddingRight: '3vh'
  },
  navTitle: {
    float: 'left',
    color: 'white'
  },
  menuBtn: {
    // marginLeft: '-1vh',
    marginRight: '1vh',
    float: 'left',
    color: 'white'
  },
  navBtns: {
    float: 'right'
  }
};

class Nav extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <nav style={styles.nav}>
        {auth && (
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              style={styles.menuBtn}
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={this.handleClose}
            >
              <Link to={'/blog'}>
                <MenuItem onClick={this.handleClose}>
                  <h3>Blog</h3>
                </MenuItem>
              </Link>
              <Link to={'/games'}>
                <MenuItem onClick={this.handleClose}>
                  <h3>Games</h3>
                </MenuItem>
              </Link>
            </Menu>
          </div>
        )}
        <Link to="/">
          <h2 aria-label="Homepage Link" style={styles.navTitle}>
            Ado
          </h2>
        </Link>
        <span className="nav-buttons" style={styles.navBtns}>
          <Github />
          <LinkedIn />
          <Medium />
          <Email />
        </span>
      </nav>

      // <div style={styles.root}>
      // {/* <FormGroup> */}
      // {/* <FormControlLabel
      //   control={
      //     <Switch
      //       checked={auth}
      //       onChange={this.handleChange}
      //       aria-label="LoginSwitch"
      //     />
      //   }
      //   label={auth ? 'Logout' : 'Login'}
      // /> */}
      // {/* </FormGroup> */}
      // <AppBar style={styles.root}>
      //   <Toolbar>
      //     <IconButton style={styles.menuButton} aria-label="Menu">
      //       <MenuIcon />
      //     </IconButton>
      //     <Typography type='button' style={styles.navTitle}>Ado</Typography>

      //     {auth && (
      //       <div>
      //         <IconButton
      //           aria-owns={open ? 'menu-appbar' : undefined}
      //           aria-haspopup="true"
      //           onClick={this.handleMenu}
      //           color="inherit"
      //         >
      //           <AccountCircle />
      //         </IconButton>
      //         <Menu
      //           id="menu-appbar"
      //           anchorEl={anchorEl}
      //           anchorOrigin={{
      //             vertical: 'top',
      //             horizontal: 'right'
      //           }}
      //           transformOrigin={{
      //             vertical: 'top',
      //             horizontal: 'right'
      //           }}
      //           open={open}
      //           onClose={this.handleClose}
      //         >
      //           <MenuItem onClick={this.handleClose}>Profile</MenuItem>
      //           <MenuItem onClick={this.handleClose}>My account</MenuItem>
      //         </Menu>
      //       </div>
      //     )}
      //     <span className="nav-buttons" style={styles.navBtns}>
      //       <Github />
      //       <LinkedIn />
      //       <Medium />
      //       <Email />
      //     </span>
      //   </Toolbar>
      // </AppBar>
      // </div>
    );
  }
}

export default Nav;

// const styles = {
//   nav: {
//     zIndex: '10',
//     position: 'fixed',
//     width: '100%',
//     marginTop: 0,
//     marginLeft: 0,
//     paddingRight: '3vh'
//   },
//   navBtns: {
//     float: 'right'
//   },
//   navTitle: {
//     float: 'left',
//     fontSize: '2rem',
//     fontFamily: "'Poiret One', cursive",
//     fontWeight: '900',
//     marginTop: 0,
//     marginBottom: 0,
//     padding: 0,
//     color: 'white'
//   }
// };

// const Nav = () => {
//   return (
//     <nav style={styles.nav}>
//       <Toolbar>
//         <IconButton
//           // className={classes.menuButton}
//           color="inherit"
//           aria-label="Menu"
//         >
//           <MenuIcon />
//         </IconButton>
//         <IconButton aria-label="Homepage Link">
//           <h2 style={styles.navTitle}>Ado</h2>
//         </IconButton>
//         <span className="nav-buttons" style={styles.navBtns}>
//           <Github />
//           <LinkedIn />
//           <Medium />
//           <Email />
//         </span>
//       </Toolbar>
//     </nav>
//   );
// };

// export default Nav;
