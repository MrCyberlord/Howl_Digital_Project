import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ExtraInfo = () => {
  const imageLinks = [
    'https://i.pinimg.com/736x/f7/2c/7a/f72c7a1447b4ee98496506d3a0cba99f.jpg',
    'https://t3.ftcdn.net/jpg/04/92/96/20/360_F_492962056_e9I6LGCqDwP8ZdekHMHnpzb25gUgLLSX.jpg',
    'https://images.unsplash.com/photo-1620275765334-4ed948bb4502?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2slMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
  ];

  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center space-x-0 md:space-x-4 bg-[#a63384] py-7 px-8 md:px-96">
      <div className="flex-grow flex items-center justify-center md:justify-start">
        <p className="text-lg font-semibold text-white">
          Keep track of the wolves
        </p>
        <span className="ml-2">
          <FaLongArrowAltRight size={20} style={{color:'white'}}/> 
        </span>
      </div>

      <div className="flex-shrink-0 flex space-x-5 justify-center md:justify-end mt-4 md:mt-0">
        {imageLinks.map((link, index) => (
          <img key={index} src={link} alt={`Wolf ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default ExtraInfo;
