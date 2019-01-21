import React from 'react';
import IconButton from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Github(props) {
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="Github Link"
        href="https://github.com/adomoshe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'github']}
          size="2x"
          color="white"
        />
      </IconButton>
    </div>
  );
}

function LinkedIn(props) {
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="LinkedIn Link"
        href="https://www.linkedin.com/in/adoranmoshe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin-in']}
          size="2x"
          color="white"
        />
      </IconButton>
    </div>
  );
}

export { Github, LinkedIn };
