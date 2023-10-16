import React from 'react';


import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';

import Mongo from '../assets/mongo.png';

const Ourservices = () => {
  return (
    <div name='Ourservices' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Our Services</p>
              <p className='py-4'>// These are our services we offer</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
            
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
         
          </div>
      </div>
    </div>
  );
};

export default Ourservices;
