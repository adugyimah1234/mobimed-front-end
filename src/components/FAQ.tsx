import React, { useState } from 'react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  return (
    <div
      className="container mx-full p-4 pt-6 md:p-6 lg:p-12 w-full"
    >
      <h2
        className="text-lg font-bold mb-4 md:text-xl lg:text-2xl block text-center"
      >
        Frequently Asked Questions
      </h2>
      <p
        className="text-md mb-8 text-lg lg:text-xl block text-left"
      >
        Our licensed pharmacists are available to answer any questions you may have.
      </p>
      <div
        className="flex flex-col w-full mx-auto"
      >
        <div
          className="flex flex-row justify-between w-full block border-b border-gray-200"
        >
          <div className="flex flex-col h-full block w-full">
            <h3
              className="text-md font-bold mb-4 md:text-lg lg:text-xl block text-between"
              onClick={() => setActiveQuestion(1)}
            >
              What is Pharmco and how do I use it?
            </h3>
            {activeQuestion === 1 && (
              <p
                className="text-sm mb-4 md:text-md lg:text-lg block text-bettween"
              >
                At our pharmacy, we believe that taking care of your health should never be a hassle. So whether you're managing a chronic condition or just looking for ways to improve your overall wellness, we're here to help you every step of the way. Thank you for choosing us as your trusted source for all of your healthcare needs.
              </p>
            )}
          </div>
          <div className="flex justify-center">
            {activeQuestion === 1 ? (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Repeat the FAQ items */}
        <div
          className="flex flex-row justify-between w-full block border-b border-gray-200"
        >
          <div className="flex flex-col h-full block w-full">
            <h3
              className="text-md font-bold mb-4 md:text-lg lg:text-xl block text-between"
              onClick={() => setActiveQuestion(2)}
            >
              How do I place an order?
            </h3>
            {activeQuestion === 2 && (
              <p
                className="text-sm mb-4 md:text-md lg:text-lg block text-between"
              >
                To place an order, simply browse our selection of products, add the items you wish to purchase to your cart, and follow the checkout process.
              </p>
            )}
          </div>
          <div className="flex justify-center">
            {activeQuestion === 2 ? (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;