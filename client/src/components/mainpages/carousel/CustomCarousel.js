import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import image1 from './assets/img1.png';
import image2 from './assets/img2.png';
import image3 from './assets/img3.png';
import image4 from './assets/images.jpg';

const CustomCarousel = () => {
  const data = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];

  const carouselStyle = {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundImage: `url(${image4})`, // Set image1 as the background
    filter: 'blur(3px)', // Apply blur effect to the background
    backgroundPosition: 'center', // Center the background image
    backgroundStyle: '100px 200px'
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '210px',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={backgroundStyle}></div>

      {/* Carousel */}
      <Carousel
        data={data}
        time={3000}
        width="1500px"
        height="200px"
        radius="10px"
        automatic={true}
        dots={true}
        slideImageFit="contain"
        style={carouselStyle}
      />
    </div>
  );
};

export default CustomCarousel;