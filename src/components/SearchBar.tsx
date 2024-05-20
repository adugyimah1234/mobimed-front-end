import { useState } from 'react';
import { MdAddShoppingCart, MdFileUpload } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import medicationImage1 from '../assets/medication 1.jpg'; // Import images for medications
import medicationImage2 from '../assets/medication 2.jpeg'; // Import images for medications

interface Medication {
  name: string;
  description: string;
  price: number;
  discountedPrice?: number; // Optional discounted price
  manufacturer: string;
  image: string;
}

const MedicationCard = ({ result }: { result: Medication }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <div className={`bg-white shadow-md rounded-md p-4 flex flex-col items-center justify-start ${isFavorite ? 'esFav' : ''} ${isInCart ? 'enCarrito' : ''}`}>
      <img src={result.image} alt={result.name} className="w-24 h-24 object-cover rounded-full mb-2" />
      <h3 className="text-lg font-bold text-gray-800">{result.name}</h3>
      <p className="text-gray-600 text-sm">{result.description}</p>
      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-gray-600 text-sm">Price: <span className="font-bold">{result.price}</span></p>
        {result.discountedPrice && (
          <p className="text-gray-600 text-sm">Discounted Price: <span className="font-bold">{result.discountedPrice}</span></p>
        )}
        <p className="text-gray-600 text-sm">Manufacturer: <span className="font-bold">{result.manufacturer}</span></p>
      </div>
      <div className="mt-2 flex items-center justify-center">
        <div className={`action aFavs w-6 h-6 ${isFavorite ? 'text-red-500' : 'text-gray-500'}`} onClick={toggleFavorite}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
          </svg>
        </div>
        <div className={`action alCarrito w-6 h-6 ml-4 ${isInCart ? 'text-blue-500' : 'text-gray-500'}`} onClick={toggleCart}>
          <NavLink to="/cart" className=" text-center bg-blue-500 text-black">
            <MdAddShoppingCart className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
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
        manufacturer: 'Manufacturer 1',
        image: medicationImage1,
      });
      results.push({
        name: 'Medication 2',
        description: 'This is another medication description',
        price: 750,
        manufacturer: 'Manufacturer 2',
        image: medicationImage2,
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
      <form className="flex flex-row justify-items-center contain-layout- justify-center space-x-5 w-full">
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none hover:border-black-500 w-6/12"
          type="text"
          placeholder="Type your medication here"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button type="submit" className="bg-[#57BDDD] text-white px-4 py-4 rounded-md hover:bg-blue-600 flex flex-grow-">
          Medication Search
        </button>
        <label className="bg-[#57BDDD] text-white px-4 py-4 rounded-md hover:bg-blue-600" htmlFor="fileInput">
          <MdFileUpload className='w-5 h-7'/>
        </label>
        <input id="fileInput" type="file" accept=".pdf, .jpg, .jpeg, .png, .gif" className="hidden" />
      </form>
      {searchResults.length > 0 ? (
        <div className="flex flex-wrap justify-start">
          {searchResults.map((result) => (
            <div key={result.name} className="w-[15.2rem] lg:p-5 p-5">
              <MedicationCard result={result} />
            </div>
          ))}
        </div>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
};

export default SearchBar;
