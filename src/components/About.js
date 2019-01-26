import React from 'react';
import { Title } from './StyledTags';

const styles = {
  rootDiv: {},
  p: {}
};

const About = () => {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <Title>Adoran Moshe</Title>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            Full-stack web developer with experience in IT recruiting. Developed
            an interest in web development while recruiting in the field,
            finally realizing this passion by enrolling in the UC Berkeley
            Extension Coding Bootcamp. I greatly enjoy learning new technologies
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
