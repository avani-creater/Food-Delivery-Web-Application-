import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll:3,
  };

  return (
  <div className=' w-carouselwidth h-64 p-4 mx-auto my-4  bg-commonBgColo border-b-2'>
 <p className='text-2xl font-extrabold text-commonColor'> What's on your mind?</p>
 
 <Slider {...settings}>
      <div className='w-44 h-40 ' ><img src="\carosual-image-chole bhature.jpg" alt="Image 1" className='w-32'/> </div>
      <div  className='w-44 h-40'> <img src="\carosual-image-paratha.jpg" alt="Image 2" className='w-32'/> </div>
      <div  className='w-44 h-40'><img src="\carosual-image-chole bhature.jpg" alt="Image 3" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-cake.avif" alt="Image 4" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Shake.avif" alt="Image 5"className='w-32' /></div>
      <div  className='w-44 h-40'><img src="\carosual-image-samosa.avif" alt="Image 6" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Poha.avif" alt="Image 7" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Pav Bhaji.avif" alt="Image 8"className='w-32' /></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Omelette.avif" alt="Image 9" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Kachori.avif" alt="Image 10" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Idli.avif" alt="Image 11" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-Dosa.avif" alt="Image 12" className='w-32'/></div>
      <div  className='w-44 h-40'><img src="\carosual-image-dhokla.avif" alt="Image 13" className='w-32'/></div>
      <div  className='w-44 h-40'> <img src="\carosual-image-cutlet.avif" alt="Image 14" className='w-32'/></div>

    </Slider>
  </div>

  );
};

export default Carousel;
