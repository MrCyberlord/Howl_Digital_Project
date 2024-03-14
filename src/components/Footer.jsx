import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaLongArrowAltRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#383838] flex flex-col md:flex-row md:items-center md:justify-around py-4 space-y-4 md:space-y-0'> 
      <div className='flex justify-center space-x-2'> 
        <div className='p-4 rounded-xl'><FaFacebookF size={20} style={{color:'white'}} /></div>
        <div className='p-4 rounded-xl'><FaTwitter size={20} style={{color:'#BF40BF'}} /></div>
        <div className='p-4 rounded-xl'><FaInstagram size={20} style={{color:'white'}} /></div>
        <div className='p-4 rounded-xl'><FaLinkedinIn size={20} style={{color:'white'}} /></div>
      </div>
      
      <div className='flex justify-evenly md:max-w-[1480px] text-sm text-white gap-2 md:gap-10 py-1'>
        <span>PRESS</span>
        <span>CATEGORY</span>
        <span>JOIN THE PACK</span>
      </div>

      <button className='md:w-auto px-3 py-1 border-2 text-white text-sm flex items-center justify-center gap-2 self-center'> {/* Newsletter sign up */}
        Sign up to our newsletter <FaLongArrowAltRight/>
      </button>

      <h1 className='text-center text-white text-sm'>
        All rights reserved. Designed, developed and powered by HOWL Digital Agency
      </h1>
    </div>
  )
}

export default Footer
