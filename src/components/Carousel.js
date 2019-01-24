import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../assets/img/carousel/carousel-1.jpg';
import img2 from '../assets/img/carousel/carousel-2.jpg';
import img3 from '../assets/img/carousel/carousel-3.jpg';
import img4 from '../assets/img/carousel/carousel-4.jpg';
import img5 from '../assets/img/carousel/carousel-5.jpg';
import img6 from '../assets/img/carousel/carousel-6.jpg';
// import img7 from '../assets/img/carousel/carousel-7.jpg';
// import img8 from '../assets/img/carousel/carousel-8.jpg';

const picsArr = [img1, img2, img3, img4, img5, img6];

//               <FontAwesomeIcon
//                 icon="hand-pointer"
//                 size="3x"
//                 color="white"
//                 transform={{ rotate: 90 }}
//               />
//               <FontAwesomeIcon
//                 icon="hand-pointer"
//                 size="3x"
//                 color="white"
//                 flip="horizontal"
//                 transform={{ rotate: 90 }}
//

const styles = {
  carouselDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    marginTop: 15,
    height: '85vh'
  },
  imgDiv: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: '85vh'
  },
  img: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: '100%'
  }
};

class MainCarousel extends Component {
  render() {
    return (
      <div style={styles.carouselDiv}>
        <Carousel
          showStatus={false}
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
                <img src={pic} alt="scenery" key={index} style={styles.img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default MainCarousel;
