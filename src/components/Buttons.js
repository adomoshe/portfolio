import React from 'react';
import IconButton from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Github(props) {
  return (
      <IconButton
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
  );
}

function LinkedIn(props) {
  return (
      <IconButton
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
  );
}

function Medium(props) {
  return (
      <IconButton
        aria-label="LinkedIn Link"
        href="https://medium.com/@adoran.moshe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'medium-m']}
          size="2x"
          color="white"
        />
      </IconButton>
  );
}

function Email(props) {
  return (
      <IconButton
        aria-label="Email Link"
        href="mailto:adoran.moshe@gmail.com"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon='at'
          size="2x"
          color="white"
        />
      </IconButton>
  );
}

export { Github, LinkedIn, Medium, Email };
