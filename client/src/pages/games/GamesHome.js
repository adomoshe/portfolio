import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../components/StyledTags';

import GameImage from './components/GamesDisplay';

import hangmanImg from './img/hangman.png';

const styles = {
  row: {
    paddingTop: '6vh',
    paddingBottom: '12vh'
  },
  div: {
    display: 'block'
  },
  link: {
    color: 'black',
    textAlign: 'center',
    margin: 'auto'
  }
};

class GamesHome extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
      const currentURL = this.props.match.url
    return (
      <div className="row justify-content-center" style={styles.row}>
        <Title>Games</Title>
        <div className="col-sm-6">
          <div style={styles.div}>
            <Link to={`${currentURL}/hangman`} style={styles.link}>
              <GameImage picSource={hangmanImg}>Hangman</GameImage>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default GamesHome;
