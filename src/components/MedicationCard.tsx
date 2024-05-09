import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from 'react-icons/md';


const MedicationCard = ({ result }: { result: Medication }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-md p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <h2 className="text-xl font-bold">Search Results</h2>
        <ul>
          {searchResults.map((medication, index) => (
            <li key={index} className="py-2 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-lg">{medication.name}</span>
                <Link to={`/cart/${result.name}`} className="px-3 py-1 rounded-md text-center mt-4">
  <MdAddShoppingCart className="w-5 h-5" />
</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicationSearchPopup;