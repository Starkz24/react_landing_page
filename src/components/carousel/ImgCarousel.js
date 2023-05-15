import React from 'react';
import './ImgCarouselStyle.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'


function ImgCarousel() {
  
  return (
    <div name='carousel' className="container">
      <Carousel className='carousel' autoPlay={true} infiniteLoop={true} showArrows={true}>
        <div>
            <img src={BoraBora} alt='/' />
        </div>
        <div>
            <img src={BoraBora2} alt='/' />
        </div>
        <div>
            <img src={Maldives} alt='/' />
        </div>
        <div>
            <img src={Maldives2} alt='/' />
        </div>
        <div>
            <img src={Maldives3} alt='/' />
        </div>
        <div>
            <img src={KeyWest} alt='/' />
        </div>
    </Carousel>
</div>
  );
}

export default ImgCarousel;
