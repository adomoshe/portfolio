import React from 'react';
import ProjCarousel from './ProjCarousel';
import { Title } from './StyledTags';

import img1 from '../assets/img/nosh/1.png';
import img2 from '../assets/img/nosh/2.png';
import img3 from '../assets/img/nosh/3.png';
import img4 from '../assets/img/nosh/4.png';

const noshPicsArr = [img1, img2, img3, img4];

const styles = {
  rootDiv: {},
  projectTitle: {
    fontSize: '2rem',
    fontWeight: '600'
  },
  links: {
    fontSize: '1.5rem',
    fontWeight: '600'
    // float: 'left'
  },
  p: {}
};

const Projects = () => {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <Title>Projects</Title>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <ProjCarousel />
          <br />
          <h2 style={styles.projectTitle}>Untrending:</h2>
          <a
            aria-label="Github Repo"
            href="https://github.com/adomoshe/untrending"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
          >
            Github Repo
          </a>
          &nbsp;|&nbsp;
          <a
            aria-label="Link"
            href="https://untrending.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.links}
          >
            Deployed
          </a>
          <br />
          <p style={styles.p}>
            Full-stack news app that displays similar stories from news sources
            opposite to what the user would typically browse, broadening
            people's perspectives. <br />
            JavaScript, Node.js, Heroku, Sequelize.js, MySQL, Express.js,
            Passport.js, Authentication, NewsAPI, HTML, CSS, jQuery, Bootstrap
          </p>
          <br />
          <br />
          <br />
          <ProjCarousel pics={noshPicsArr} />
          <br />
          <h2 style={styles.projectTitle}>Nosh:</h2>
            <a
              aria-label="Github Repo"
              href="https://github.com/adomoshe/nosh"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.links}
            >
              Github Repo
            </a>
            &nbsp;|&nbsp;
            <a
              aria-label="Link"
              href="https://adomoshe.github.io/nosh/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.links}
            >
              Deployed
            </a>
            <br />
            <p style={styles.p}>
            Recipe searching interface filtering Yummly API results based on
            user query by dish or by ingredients <br />
            JavaScript, Yummly APIs, HTML, CSS, jQuery, Bootstrap
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
