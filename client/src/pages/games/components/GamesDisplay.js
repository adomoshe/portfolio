import React from 'react';

const styles = {
  picFigure: {
    float: 'left',
    width: '66vh',
    textAlign: 'center'
  },
  pics: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    margin: '3vh',
    width: '60vh'
  },
  caption: {
    marginLeft: '3vh',
    marginRight: '3vh'
  }
};

const GameImage = ({ picSource, children }) => (
    <figure style={styles.picFigure}>
      <img src={picSource} alt="Game pic" style={styles.pics} />
        <figcaption style={styles.caption}><h3>{children}</h3></figcaption>
    </figure>
  );

export default GameImage;
