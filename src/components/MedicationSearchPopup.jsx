import React from 'react';

const MedicationSearchPopup = ({ searchResults, onAddToCart }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-xl font-bold">Search Results</h2>
        <ul>
          {searchResults.map((medication, index) => (
            <li key={index} className="py-2 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-lg">{medication.name}</span>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onAddToCart(medication)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicationSearchPopup;