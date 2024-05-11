import React from 'react';

const FAQ = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 md:p-6 lg:p-12"
    >
      <p
        className="text-lg font-bold mb-4 md:text-xl lg:text-2xl block"
      >
        FAQ
      </p>
      <p
        className="text-md mb-8 md:text-lg lg:text-xl block"
      >
        Our licensed pharmacists are available to answer any questions you may have.
      </p>
      <div
        className="flex flex-col w-full md:w-1/2 lg:w-1/3"
      >
        <div
          className="flex flex-row justify-between w-full block"
        >
          <div className="flex flex-col h-full block">
            <p
              className="text-md font-bold mb-4 md:text-lg lg:text-xl block"
            >
              What is Pharmco and how do I use it?
              <p
                className="text-sm mb-4 md:text-md lg:text-lg block"
              >
                At our pharmacy, we believe that taking care of your health should never be a hassle. So whether you're managing a chronic condition or just looking for ways to improve your overall wellness, we're here to help you every step of the way. Thank you for choosing us as your trusted source for all of your healthcare needs.
              </p>
            </p>
          </div>
        </div>
        {/* Repeat the FAQ items */}
      </div>
    </div>
  );
};

export default FAQ;