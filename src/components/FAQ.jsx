import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div
      className="relative w-full h-full box-border flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#f7f7f7',
        borderRadius: '1rem',
        padding: '2rem',
        boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <p
        className="text-3xl md:text-4xl lg:text-5xl leading-9 font-thicccboi font-[700]"
        style={{
          marginBottom: '1rem',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        FAQ
      </p>
      <p
        className="text-xl md:text-2xl lg:text-3xl leading-5 md:leading-7 lg:leading-9 font-labil-grotesk-trial font-[300]"
        style={{
          marginBottom: '2rem',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        Our licensed pharmacists are available to answer any{" "}
      </p>
      <br />
      <div
        className="flex flex-col w-full box-border"
        style={{
          backgroundColor: '#fff',
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div
          className="flex flex-row justify-between w-full pr-12 pb-4 box-border"
          style={{
            animation: 'slide-in 0.5s ease-in-out',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <div className="flex flex-col h-full box-border">
            <p
              className="text-xl md:text-2xl lg:text-3xl leading-5 md:leading-7 lg:leading-9 font-thicccboi font-[700]"
              style={{
                marginBottom: '1rem',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              What is Pharmco and how do I use it?
            </p>
            {showFAQ && (
              <p
                className="text-xl md:text-2xl lg:text-3xl leading-5 md:leading-7 lg:leading-9 font-labil-grotesk-trial font-[300] opacity-50"
                style={{
                  animation: 'fade-in 0.5s ease-in-out',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                At our pharmacy, we believe that taking care of your health
                should never be a hassle. So whether you're managing a chronic
                condition or just looking for ways to improve your overall
                wellness, we're here to help you every step of the way. Thank
                you for choosing us as your trusted source for all of your
                healthcare needs.
              </p>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={toggleFAQ}
            style={{
              animation: 'rotate-icon 0.5s ease-in-out',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {showFAQ ? (
              <FaMinus className="w-3.5 h-3.5" />
            ) : (
              <FaPlus className="w-3.5 h-3.5" />
            )}
          </div>
        </div>
        {/* Repeat the FAQ items */}
      </div>
    </div>
  );
};

export default FAQ;