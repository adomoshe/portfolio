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
  },
  vidFigure: {
    margin: 'auto',
    width: '96vh',
    height: '61vh',
    textAlign: 'center'
  },
  vid: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    margin: '3vh',
    width: '90vh',
    height: '50.625vh'
  }
};

const BlogImage = ({ picSource, children }) => {
  return (
    <figure style={styles.picFigure}>
      <img src={picSource} alt="Blog pic" style={styles.pics} />
      {children ? (
        <figcaption style={styles.caption}>{children}</figcaption>
      ) : null}
    </figure>
  );
};

const BlogVideo = ({ vidSource }) => {
  return (
    <figure style={styles.vidFigure}>
      <iframe
        title="Andres GoPro Video"
        style={styles.vid}
        src={vidSource}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <figcaption>Video by Andres Granado</figcaption>
    </figure>
  );
};

export { BlogImage, BlogVideo };
