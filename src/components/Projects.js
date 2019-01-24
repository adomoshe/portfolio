import React from 'react';
import ProjCarousel from './ProjCarousel';

const styles = {
  rootDiv: {
    margin: 25
  },
  title: {
    // fontShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    fontSize: '3em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '900',
    margin: 20
  },
  p: {
    fontSize: '1.5em',
    fontFamily: "'Poiret One', cursive",
    fontWeight: '600'
  }
};

function Projects(props) {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <div class="col-4">
          <h1 style={styles.title}>Projects</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          
          <ProjCarousel />
          <br />
            Untrending:&nbsp;
            <a
              aria-label="Github Repo"
              href="https://github.com/adomoshe/untrending"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            &nbsp;|&nbsp;
            <a
              aria-label="Link"
              href="https://untrending.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
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
            <ProjCarousel />
            <br />
            Nosh:&nbsp;
            <a
              aria-label="Github Repo"
              href="https://github.com/adomoshe/nosh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
            &nbsp;|&nbsp;
            <a
              aria-label="Link"
              href="https://adomoshe.github.io/nosh/"
              target="_blank"
              rel="noopener noreferrer"
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
