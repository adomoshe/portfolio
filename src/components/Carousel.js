import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import img1 from '../assets/img/carousel-1.jpg';
import img2 from '../assets/img/carousel-2.jpg';
import img3 from '../assets/img/carousel-3.jpg';
import img4 from '../assets/img/carousel-4.jpg';
import img5 from '../assets/img/carousel-5.jpg';
import img6 from '../assets/img/carousel-6.jpg';
// import img7 from '../assets/img/carousel-7.jpg';
// import img8 from '../assets/img/carousel-8.jpg';

const picsArr = [
  {
    alt: 'scenery',
    path: img1
  },
  {
    alt: 'scenery',
    path: img2
  },
  {
    alt: 'scenery',
    path: img3
  },
  {
    alt: 'scenery',
    path: img4
  },
  {
    alt: 'scenery',
    path: img5
  },
  {
    alt: 'scenery',
    path: img6
  }
  // {
  //   alt: 'scenery',
  //   path: img7
  // }
  // {
  //   alt: 'scenery',
  //   path: img8
  // }
];

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
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)'
  },
  imgDiv: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: 1000
  },
  img: {
    marginTop: 0,
    marginLeft: 0,
    width: '100%',
    height: '100%',
    boxShadow: '0px 0px 5px 5px rgba(0,0,0,0.6)'
  }
};


class PicsCarousel extends Component {
  render() {
    return (
      <div style={styles.carouselDiv}>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        width="100%"
        autoPlay={true}
        stopOnHover={false}
        interval={7000}
        transitionTime={800}
      >
      {picsArr.map((pic, index) => {
        return (<div style={styles.imgDiv}>
          <img src={pic.path} alt={pic.alt} key={index} style={styles.img} />
        </div>)
      })}
      </Carousel>
      </div>
    );
  }
}

export default PicsCarousel;
