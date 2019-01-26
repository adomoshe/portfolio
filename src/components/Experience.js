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
  p: {},
  li: {
    listStyleType: 'none',
    marginLeft: '-1vw'
  }
};

const Experience = () => {
  return (
    <div style={styles.rootDiv}>
      <div class="row">
        <Title>Experience</Title>
      </div>
      <div class="row justify-content-center">
        <div class="col-10">
          <p style={styles.p}>
            IT Recruiter - KForce
            <br />
            Sep '17 - Feb ’18, San Ramon, CA
            <ul>
              <ListItem>
                Quickly familiarized with IT structure and terminology,
                gathering a strong understanding of the field
              </ListItem>
              <ListItem>
                Focus on building deep relationships with dozens of senior IT
                professionals monthly to match their needs and interests for
                available roles at Fortune 500 companies in the SF Bay Area
              </ListItem>
            </ul>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Experience;
