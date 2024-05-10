import { useState } from 'react';
import { MdAddShoppingCart, MdFileUpload } from "react-icons/md";

import { NavLink } from 'react-router-dom';

interface Medication {
  name: string;
  description: string;
  price: number; // Changed from string to number
  manufacturer: string;
}

const MedicationCard = ({ result }: { result: Medication }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-12 flex flex-col items-center justify-center">
      <h3 className="text-lg font-bold text-gray-800">{result.name}</h3>
      <p className="text-gray-600 text-sm">{result.description}</p>
      <div className="flex items-center justify-between w-full mt-4">
        <p className="text-gray-600 text-sm">Price: <span className="font-bold">{result.price}</span></p>
        <p className="text-gray-600 text-sm">Manufacturer: <span className="font-bold">{result.manufacturer}</span></p>
      </div>
      <NavLink to="/cart" className="px-3 py-1 rounded-md text-center mt-4"><MdAddShoppingCart className="w-5 h-5" />
      </NavLink>

    </div>
  );
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Medication[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Simulate search results
    const results: Medication[] = [];
    if (query.length > 2) {
      results.push({
        name: 'Medication 1',
        description: 'This is a medication description',
        price: 500,
        manufacturer: 'Manufacturer 1'
      });
      results.push({
        name: 'Medication 2',
        description: 'This is another medication description',
        price: 750,
        manufacturer: 'Manufacturer 2'
      });
    }
    const filteredResults = results.filter((medication) =>
      medication.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h2 className="text-xl font-bold">
        <span className="text-black">BUY DRUG</span>
        <span className="text-[#57BDDD]">/SEARCH MEDICATION</span>
      </h2>
      <form className="flex flex-row items-stretch justify-center space-x-5 w-full">
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none hover:border-black-500 w-6/12"
          type="text"
          placeholder="Type your medication here"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit" className="bg-[#57BDDD] text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Medication Search
        </button>
        <label className="bg-[#57BDDD] text-white px-4 py-4 rounded-md hover:bg-blue-600" htmlFor="fileInput">
          <MdFileUpload />
        </label>
        <input id="fileInput" type="file" accept=".pdf, .jpg, .jpeg, .png, .gif" className="hidden" />
      </form>
      {searchResults.length > 0 ? ( // Added a check for empty search results
        <div className="flex items-start">
          <ul className='flex p-6'>
            {searchResults.map((result) => (
              <li key={result.name}>
                <MedicationCard result={result} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default SearchBar;