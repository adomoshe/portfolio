import React from 'react';

const styles = {
    figure: {
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
  
  const BlogImage = ({ picSource, children }) => {
    return (
      <figure style={styles.figure}>
        <img src={picSource} alt="Blog pic" style={styles.pics} />
        {children ? (
          <figcaption style={styles.caption}>{children}</figcaption>
        ) : null}
      </figure>
    );
  };

  export default BlogImage;
