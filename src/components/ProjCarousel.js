import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/img/nosh/1.png';
import img2 from '../assets/img/nosh/2.png';
import img3 from '../assets/img/nosh/3.png';
import img4 from '../assets/img/nosh/4.png';

const picsArr = [img1, img2, img3, img4];

const styles = {
  carouselDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    marginTop: 0,
    height: '20vh',
    width: '40vh'
  },
  imgDiv: {
    marginTop: 0,
    marginLeft: 0,
    height: '20vh',
    width: '40vh'
  },
  img: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: '100%'
  }
};

class ProjCarousel extends Component {
  render() {
    return (
      <div style={styles.carouselDiv}>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          width="100%"
          autoPlay={true}
          stopOnHover={false}
          interval={7000}
          transitionTime={800}
        >
          {picsArr.map((pic, index) => {
            return (
              <div style={styles.imgDiv}>
                <img src={pic} alt="nosh" key={index} style={styles.img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default ProjCarousel;
