import React from 'react';
import { Source } from './Buttons';
import { Title } from './StyledTags';

const styles = {
  rootDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: '1.5vh',
    borderRadius: 10
  },
  title: {
    marginBottom: 0
  },
  p: {
    color: 'white'
  },
  links: {
    color: 'white'
  }
};

const Footer = () => {
  return (
    <footer style={styles.rootDiv}>
      <div class="row">
        <Title style={styles.title}>"Footer"</Title>
      </div>
      <div class="row justify-content-center">
        <div class="col-10 content-justify-center" align="center">
          <Source />
          <p style={styles.p}>
            Source code <br />
            <a
              aria-label="Github Link"
              href="https://www.linkedin.com/in/niki-moshe-3b038b4/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.links}
            >
              Images thanks to Niki Moshe
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
