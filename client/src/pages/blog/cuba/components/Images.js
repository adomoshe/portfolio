import React from 'react';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const BlogImage = ({picSource, key}) => {
    return (
        <img
        src={picSource}
        alt='Blog pic'
        key={key}
        />
    )
}

export default BlogImage;
