import React from 'react';

function Hero() {
  return (
    <div className='w-100 md:flex md:items-justify-between p-10 px-0 '>
      <div className='p-10 px-0 min-w-50'>
        <button className='bg-[#57BDDD] text-white p-500'>Welcome to</button>
        <br />
        <span className='text-[50px]'>Most trusted</span> <br />
        <span className='font-bold text-[3.3rem]'>online pharmacy</span>
        <p>
          Our licensed pharmacists are available to answer any 
          
          <br /> questions you may have about your
           medications and offer expert advice on managing your health.
        </p>
        <div className='flex gap-5 py-7'>
          <button className='bg-[#57BDDD] text-white'>Search for Prescription</button>
          <button className='border-stone-900'>Upload Prescription</button>
        </div>
      </div>
      <div className='flex items- justify-around '>
        <img
          src="src/assets/img2.jpg"
          alt="img1"
          className='flex'
        />
        <img
          src="src/assets/img.jpg"
          alt="img1"
          className='py-20 absolute right-0'
        />
      </div>
    </div>
  );
}

export default Hero;