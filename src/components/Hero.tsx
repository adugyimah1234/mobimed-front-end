import React from 'react';
import '../index.css'

function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around pt-2 px-5 lg:px-10  lg:p-15'>
      <div className='lg:w-1/2 lg:p-10 h-screen js-sh'>
        <button className='bg-[#57BDDD] text-white px-5 py-2 lg:px-8 lg:py-3'>Welcome to</button>
        <br />
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          <span className='text-[30px] lg:text-[50px] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
            <ul className="block  text-left leading-tight [&_li]:block text-[#27ADE2]">
              <li className="animate-text-slide">
                <span>Most trusted</span>
              </li>
              <li className="animate-text-slide">
                <span>Most reliable</span>
              </li>
              <li className="animate-text-slide">
                <span>Most secure</span>
              </li>
              <li aria-hidden="true" className="animate-text-slide">
                <span>Most trusted</span>
              </li>
            </ul>

          </span>
        </div>
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

      <div className='lg:w-1/2 lg:flex justify-between pb-0'>
        <img
          src="src/assets/img2.jpg"
          alt="img1"
          className='lg:w-1/2'
        />
        <img
          src="src/assets/img.jpg"
          alt="img2"
          className='lg:w-1/2'
        />
      </div>
    </div>
  );
}

export default Hero;
