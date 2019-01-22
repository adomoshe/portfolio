import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../assets/img/carousel-1.jpg';
import img2 from '../assets/img/carousel-2.jpg';
import img3 from '../assets/img/carousel-3.jpg';
import img4 from '../assets/img/carousel-4.jpg';
import img5 from '../assets/img/carousel-5.jpg';
import img6 from '../assets/img/carousel-6.jpg';
import img7 from '../assets/img/carousel-7.jpg';
import img8 from '../assets/img/carousel-8.jpg';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselSteps = [
  {
    label: '',
    imgPath: img1
  },
  {
    label: '',
    imgPath: img2
  },
  {
    label: '',
    imgPath: img3
  },
  {
    label: '',
    imgPath: img4
  },
  {
    label: '',
    imgPath: img5
  },
  {
    label: '',
    imgPath: img6
  },
  {
    label: '',
    imgPath: img7
  },
  {
    label: '',
    imgPath: img8
  }
];

const styles = () => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '1',
    boxShadow: '0 16px 20px 0 rgba(0, 0, 0, 0.4)'
  },
  img: {
    height: 800,
    display: 'flex',
    overflow: 'hidden',
    width: '100%'
  },
  buttons: {
    height: '100%',
    margin: '6%'
  },
  mobileStepper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '2',
    background: 'transparent'
  }
});

class Carousel extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeState + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeState - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const maxSteps = carouselSteps.length;

    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {carouselSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          activeStep={activeStep}
          className={classes.mobileStepper}
          style={styles.mobileStepper}
          nextButton={
            <Button
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
              style={styles.buttons}
            >
              <FontAwesomeIcon
                icon="hand-point-right"
                size="3x"
                color="white"
              />
            </Button>
          }
          backButton={
            <Button onClick={this.handleBack} disabled={activeStep === 0} style={styles.buttons}>
              <FontAwesomeIcon
                icon="hand-point-left"
                size="3x"
                color="white"
              />
            </Button>
          }
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Carousel);
