import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../../components/StyledTags';

const styles = {
  row: {
    paddingTop: '6vh',
    paddingBottom: '12vh'
  },
  category: {
      marginTop: '2vh'
  },
  link: {
    color: 'black',
    textAlign: 'center'
  }
};

const BlogHome = ({ match }) => {
  return (
    <div className="row justify-content-center" style={styles.row}>
      <Title>Travel Blog</Title>
      <div className="col-sm-6">
      <h2 style={styles.category}>Cuba</h2>
      <h3>&emsp;March, 2017</h3>
        <Link to={`${match.path}/cuba`} style={styles.link}>
          <h3>
            Important Pre-Departure and General Information (Trump Update)
          </h3>
        </Link>
        <h2 style={styles.category}>Spain (Study Abroad)</h2>
        <h3>&emsp;March, 2016</h3>
        <Link to={`${match.path}/spring-break`} style={styles.link}>
          <h3>
            Spring Break Road Trip Into Portugal
          </h3>
        </Link>
        <Link to={`${match.path}/dublin`} style={styles.link}>
          <h3>
            Dublin, Ireland
          </h3>
        </Link>
        <h3>&emsp;January, 2016</h3>
        <Link to={`${match.path}/week-2`} style={styles.link}>
          <h3>
            Week 2 in Barcelona (Montserrat, Sailing, and Futbol)
          </h3>
        </Link>
        <Link to={`${match.path}/arrival`} style={styles.link}>
          <h3>
            Arrival (Including Connection in Amsterdam)
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogHome;
