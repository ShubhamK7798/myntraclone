import Image from 'next/image';
import React from 'react'

import Slider from "react-slick";

const Carousel = ({sliderimage}) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows : false
      };




  return (
    <Slider {...settings} className="w-full !hidden md:!block  mx-auto h-96  ">

      {sliderimage.map(item=>(<div key={item} className='flex h-96 relative w-full '>

      <Image src= {item} objectFit='cover' layout='fill'   />
        </div>))}
  
  </Slider>
  )
}

export default Carousel