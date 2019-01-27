import React from 'react';
import { Title, ListItem } from './StyledTags';

const styles = {
  rootDiv: {},
  title: {
    // fontShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    fontSize: '3rem',
    fontWeight: '900',
    margin: '2vw'
  },
  p: {}
};

const Education = () => {
  return (
    <div style={styles.rootDiv}>
      <div className="row">
        <Title>Education</Title>
      </div>
      <div className="row justify-content-center">
        <div className="col-10">
          <p style={styles.p}>
            University of California, Berkeley Extension, CA
            <br />
            2018-2019
            <ul>
              <ListItem>
                Intensive 3.5 month full-stack web development bootcamp taught
                on location at UC Berkeley
              </ListItem>
            </ul>
            <br />
            University of Tampa, FL
            <br />
            2014-2017
            <ul>
              <ListItem>
                Graduated in 3 years earning a 3.73 GPA with an International
                Business Management degree and a minor in Economics
              </ListItem>
            </ul>
            <br />
            Universitat Autònoma de Barcelona, Spain
            <br />
            Jan - April '16
            <ul>
              <ListItem>
                Study Abroad - Enrolled in multiple economics courses, learning first hand
                about EU policies and their economic implications
              </ListItem>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
