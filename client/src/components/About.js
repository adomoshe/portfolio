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
        <div className="col-sm-6">
          <p style={styles.p}>
            Full-stack web developer with experience in IT recruiting.
            Self-studied coding while finishing my degree, then supplemented
            that knowledge at the UC Berkeley Extension Coding Bootcamp. Greatly
            enjoy continuously learning new technologies and utilizing those
            skills to build useful applications. Eager to invest time and
            resources to further my knowledge and skills to excel my career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
