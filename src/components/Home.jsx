import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Welcome</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          NaviThoughts
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        Multi-Cloud
Migrations, Disaster Recovery, and Optimization
as a Service
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Explore the future of cloud solutions with our cutting-edge services tailored to your business needs. At Multi-Cloud Migrations, Disaster Recovery, and Optimization as a Service, we redefine cloud computing by seamlessly integrating multiple cloud platforms to elevate your organization's efficiency and resilience. Our expert team specializes in orchestrating smooth and secure multi-cloud migrations, ensuring your data and applications seamlessly transition across diverse cloud environments.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
