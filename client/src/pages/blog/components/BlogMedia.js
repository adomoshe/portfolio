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
  root: {
    width: '100%',
    paddingBottom: '56.25%',
    height: 0,
    position: 'relative',
    marginBottom: '8vh'
  },
  vidFigure: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  vid: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    width: '100%',
    height: '100%'
  },
  vidCaption: {
    position: ''
  },
  a: {
    color: 'black'
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
    <div style={styles.root}>
      <figure style={styles.vidFigure}>
        <iframe
          title="Andres GoPro Video"
          style={styles.vid}
          src={vidSource}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <figcaption style={styles.vidCaption}>
          <a
            aria-label="Link"
            href="https://www.instagram.com/agranadod/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.a}
          >
            Video by Andres Granado
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export { BlogImage, BlogVideo };
