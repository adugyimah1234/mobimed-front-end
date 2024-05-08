import React, { useState } from 'react';
import MedicationSearchPopup from './MedicationSearchPopup';
import { BsPrescription2 } from "react-icons/bs";


const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Fetch search results from API or database
      const response = await fetch('your-api-endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      const results = await response.json(); // Assuming results are returned in JSON format
      setSearchResults(results);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };
  

  return (
<div className='flex flex-col items-center justify-center space-y-5'>
  <h2 className='text-xl font-bold'>
    <span className='text-black'>BUY DRUG</span>
    <span className='text-[#57BDDD]'>/SEARCH MEDICATION</span>
  </h2>
  <div onSubmit={handleSubmit} className='flex flex-row items-center justify-center space-x-5 w-full'>
  <input
  className='p-2 border border-grey-300 rounded-md focus:outline-none hover:border-black-500'
  type="text"
  value={searchQuery}
  onChange={(event) => setSearchQuery(event.target.value)} // Updated onChange handler
  placeholder="Type your medication here"
/>
    <button type="submit" className="bg-[#57BDDD] text-white px-4 py-2 rounded-md
     hover:bg-blue-600">Medication Search</button>
    <label className="bg-[#57BDDD] text-white px-4 py-3 rounded-md hover:bg-white hover:text-[#57BDDD] cursor-pointer">
      <BsPrescription2 className="text-white hover:text-[#57BDDD]" />
      <input type="file" className="hidden" />
    </label>
  </div>
   {showPopup && (
          <MedicationSearchPopup
            searchResults={searchResults}
            onAddToCart={handleAddToCart}
          />
        )}
</div>
  )
}

export default SearchBar
