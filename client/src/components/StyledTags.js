import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  li: {
    listStyleType: 'none',
    marginLeft: '-1vw',
    fontSize: '1.5rem',
    fontWeight: '600'
  }
};

const Title = props => {
  return (
    <div className="col-12">
      <h1>{props.children}</h1>
    </div>
  );
};

const ListItem = props => {
  return (
    <li style={styles.li}>
      <FontAwesomeIcon icon="arrow-right" />
      &ensp; {props.children}
    </li>
  );
};

export { ListItem, Title };
