import React from 'react';
import { Title } from './StyledTags';

const styles = {
  rootDiv: {},
  p: {}
};

const About = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Adoran Moshe</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <p style={styles.p}>
            Full-stack web developer with experience in IT recruiting.
            Self-studied coding for 2+ years while finishing my degree then
            recruiting, recently supplemented my knowledge in the UC Berkeley
            Extension Coding Bootcamp. Greatly enjoy learning new technologies
            in depth while utilizing my new talents. I am eager to invest time
            and resources to further this new knowledge and skills to excel my
            career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
