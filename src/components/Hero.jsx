import React from 'react';
import { heroImg } from '../assets';

const Hero = () => {
  return (
    <div className='w-full bg-white py-24 flex flex-col items-center'>
        <div className='md:max-w-[1480px] w-full flex flex-col md:flex-row justify-around gap-8 px-4 md:px-0'>
            <div className='flex flex-col justify-start gap-4 max-w-md md:max-w-lg'>
                <p className='text-base text-black 
                md:text-xl'>
                    We exist because we want to help you navigate and harness the potential of this ever-changing digital landscape</p>
                <h1 className='leading-tight  text-2xl md:text-9xl font-bold text-purple-600 ml-0 md:ml-32'>Your Growth Partners</h1>
            </div>

            <img src={heroImg} alt="Hero Image" className="md:h-1/2 max-w-md md:max-w-lg order-first md:order-none" />
        </div>

        <p className=' px-4 md:px-0 py-2 text-lg text-gray-600  md:max-w-lg ml-0 md:ml-96'>
            It's not a game of guesses, it's a game of numbers where growth is the ultimate goal. We leverage cutting-edge technology and data-driven insights to help you answer questions that unlock growth.
        </p>
    </div>
  )
}

export default Hero;
