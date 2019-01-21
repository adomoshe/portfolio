import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a class='navbar-brand' href='https://ado-portfolio.herokuapp.com/' rel="noopener noreferrer">
          Ado
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon' />
        </button>
        <div class='collapse navbar-collapse' id='navbarText'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='https://github.com/adomoshe' target='_blank' rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='https://www.linkedin.com/in/adoranmoshe/' target='_blank' rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <span class='navbar-text'>Navbar text with an inline element</span>
        </div>
      </nav>
    );
  }
}

export default Nav;
