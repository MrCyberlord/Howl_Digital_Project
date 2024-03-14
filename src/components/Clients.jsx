import React from 'react'
import Card from './Card'
import Slider from "react-slick";
import { clients } from '../data/Clients';

const Clients = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
  ]
  };

  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
              <h1 className='py-3 text-3xl font-bold text-purple-500'>Clients we work with</h1>
            </div>
            
            <Slider {...settings} className=''>
              {clients.map((client,i)=>
                <div key={i}>
                  <Card client={client} />
                </div> ) }
            </Slider>
            
        </div>

    </div>
  )
}

export default Clients