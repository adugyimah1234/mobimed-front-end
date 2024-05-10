import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div
  className="relative w-full h-full flex flex-col items-center justify-center"
  style={{
    maxWidth: '600px',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
  }}
>
  <p
    className="text-lg font-bold"
    style={{
      marginBottom: '1rem',
    }}
  >
    FAQ
  </p>
  <p
    className="text-md"
    style={{
      marginBottom: '2rem',
    }}
  >
    Our licensed pharmacists are available to answer any questions you may have.
  </p>
  <div
    className="flex flex-col w-full"
    style={{
      backgroundColor: '#fff',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      className="flex flex-row justify-between w-full"
      style={{
        marginBottom: '2rem',
      }}
    >
      <div className="flex flex-col h-full">
        <p
          className="text-md font-bold"
          style={{
            marginBottom: '1rem',
          }}
        >
          What is Pharmco and how do I use it?
        </p>
        {showFAQ && (
          <p
            className="text-sm"
            style={{
              marginBottom: '1rem',
            }}
          >
            At our pharmacy, we believe that taking care of your health should never be a hassle. So whether you're managing a chronic condition or just looking for ways to improve your overall wellness, we're here to help you every step of the way. Thank you for choosing us as your trusted source for all of your healthcare needs.
          </p>
        )}
      </div>
      <div
        className="cursor-pointer"
        onClick={toggleFAQ}
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