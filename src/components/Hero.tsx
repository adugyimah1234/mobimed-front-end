import React from 'react';

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around px-5 lg:px-10 py-10 lg:p-15'>
      <div className='lg:w-1/2 lg:p-10'>
        <button className='bg-[#57BDDD] text-white px-5 py-2 lg:px-8 lg:py-3'>Welcome to</button>
        <br />
        <span className='text-[30px] lg:text-[50px]'>Most trusted</span> <br />
        <span className='font-bold text-[2rem] lg:text-[3.3rem]'>online pharmacy</span>
        <p>
          Our licensed pharmacists are available to answer any
          <br /> questions you may have about your
          medications and <br />offer expert advice on managing your health.
        </p>
        <div className='flex flex-col lg:flex-row gap-5 py-7'>
          <button className='bg-[#57BDDD] text-white px-5 py-2 lg:px-8 lg:py-3'>Search for Prescription</button>
          <button className='border border-stone-900 px-5 py-2 lg:px-8 lg:py-3'>Upload Prescription</button>
        </div>
      </div>

      <div className='lg:w-1/2 lg:flex justify-center'>
        <img
          src="src/assets/img2.jpg"
          alt="img1"
        />
        <img 
       src="src/assets/img.jpg" />
      </div>
    </div>
  );
}

export default Hero;
