// Nav component for all pages

import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
    open: false,
    anchorEl: null
  };

  menuClick = e => {
    this.state.open
      ? this.setState({ open: false, anchorEl: null })
      : this.setState({ open: true, anchorEl: e.currentTarget });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <nav style={styles.nav}>
        <div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            style={styles.menuBtn}
            onClick={this.menuClick}
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
            disableAutoFocusItem={true}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            onClose={this.menuClick}
            open={open}
          >
            <Link to={'/blog'}>
              <MenuItem onClick={this.menuClick}>
                <h3>Blog</h3>
              </MenuItem>
            </Link>
            <Link to={'/games'}>
              <MenuItem onClick={this.menuClick}>
                <h3>Games</h3>
              </MenuItem>
            </Link>
          </Menu>
        </div>
        <Link to="/">
          <h2 aria-label="Homepage Link" style={styles.navTitle}>
            Ado
          </h2>
        </Link>
        {/* Span with FontAwesome buttons as external links */}
        <span className="nav-buttons" style={styles.navBtns}>
          <Github />
          <LinkedIn />
          <Medium />
          <Email />
        </span>
      </nav>
    );
  }
}

export default Nav;
