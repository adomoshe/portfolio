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

const Title = ({children}) => {
  return (
    <div className="col-12">
      <h1>{children}</h1>
    </div>
  );
};

const ListItem = ({children}) => {
  return (
    <li style={styles.li}>
      <FontAwesomeIcon icon="arrow-right" />
      &emsp; {children}
    </li>
  );
};

export { ListItem, Title };
