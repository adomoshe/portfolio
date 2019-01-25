import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const styles = {
  carouselDiv: {
    boxShadow: '0px 8px 20px 8px rgba(0,0,0,0.6)',
    height: '30vh',
    width: '55vh'
  },
  imgDiv: {
    marginTop: 0,
    marginLeft: 0,
    height: '30vh',
    width: '55vh'
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
    const picsArr = this.props.pics;
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
