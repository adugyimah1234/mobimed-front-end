import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;
  background: url('src/assets/Signup.jpeg') no-repeat center center;
  background-size: cover;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;


const Icon = styled.svg`
  width: 1em;
  height: 1em;
  fill: currentColor;
`;

const icons = {
  user: (
    <Icon viewBox="0 0 24 24">
      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.686-10 5v2h20v-2c0-3.314-6.686-5-10-5z" />
    </Icon>
  ),
  venusMars: (
    <Icon viewBox="0 0 24 24">
      <path d="M12 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8zm-1 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1 5.9a7.075 7.075 0 0 0-4.75 1.862l-.14.124-3.33-3.326-1.16 1.16 3.328 3.33a7.072 7.072 0 0 0-1.848 4.804l.002.098H2v2h3.18c.177 1.011.517 1.957 1.002 2.801l-2.237 2.236 1.42 1.42 2.237-2.237a7.07 7.07 0 0 0 2.798 1H12v-2H8.82a5.07 5.07 0 0 1-.829-2h3.018a7.075 7.075 0 0 0 5.714-5.716V14h2v-2h-1.9a7.075 7.075 0 0 0-4.718-2.1zm-7 7.1a1 1 0 0 1 2 0h-2zm16-14h-2v-3h-2v3h-2v2h2v2h2v-2h2v-2z" />
    </Icon>
  ),
  calendarAlt: (
    <Icon viewBox="0 0 24 24">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zm1 15c0 .551-.448 1-1 1H5c-.551 0-1-.449-1-1V7c0-.551.448-1 1-1h1v1h2V6h8v1h2V6h1c.551 0 1 .449 1 1v12z" />
      <path d="M7 10h5v5H7zm6 0h4v2h-4zm0 3h4v2h-4z" />
    </Icon>
  ),
  phone: (
    <Icon viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.572 15.572 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.21-.12c1.12.56 2.34.88 3.59.88a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1c-8.836 0-16-7.163-16-16a1 1 0 0 1 1-1H5.5a1 1 0 0 1 1 1c0 1.25.32 2.47.88 3.59a1 1 0 0 1-.12 1.21l-2.2 2.2z" />
    </Icon>
  ),
  mapMarkerAlt: (
    <Icon viewBox="0 0 24 24">
      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 15.1C9.4 14.58 7 10.67 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.67-2.4 5.58-5 8.1zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Icon>
  ),
  idCard: (
    <Icon viewBox="0 0 24 24">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM6 14h5v1H6zm0-3h5v1H6zm0-3h5v1H6z" />
    </Icon>
  ),
  mapPin: (
    <Icon viewBox="0 0 24 24">
      <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 15.1C9.4 14.58 7 10.67 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.67-2.4 5.58-5 8.1zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Icon>
  ),
  idBadge: (
    <Icon viewBox="0 0 24 24">
      <path d="M17 3h-1V2h-2v1H10V2H8v1H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H7V8h10v13zm-5-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-2.21 0-4 1.79-4 4h2a2 2 0 0 1 4 0h2c0-2.21-1.79-4-4-4zm0-10c-2.21 0-4 1.79-4 4h2a2 2 0 0 1 4 0h2c0-2.21-1.79-4-4-4z" />
    </Icon>
  ),
  lock: (
    <Icon viewBox="0 0 24 24">
      <path d="M12 17a1.5 1.5 0 0 1-1.5-1.5V14a1.5 1.5 0 0 1 3 0v1.5A1.5 1.5 0 0 1 12 17zm6-6h-1V8a5 5 0 0 0-10 0v3H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm-4 0H10V8a2 2 0 0 1 4 0v3z" />
    </Icon>
  ),
};

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    phoneNumber: '',
    ghanaCardID: '',
    addressGPS: '',
    insuranceNumber: '',
    password: '',
    confirmPassword: '',
    location: '',
    patientType: 'Walk-in Patient', // Default to 'Walk-in Patient'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchLocation = async (latitude: number, longitude: number) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const address = data.results[0].formatted_address;
          setFormData((prevFormData) => ({
            ...prevFormData,
            location: address,
          }));
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          location: 'Unable to fetch current location',
        }));
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            location: 'Unable to fetch current location',
          }));
        }
      );
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: 'Geolocation is not supported by this browser',
      }));
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row p-center
      justify-around items-center p-10 pb-center w-auto bg-white rounded-lg shadow-md md:w-2/3 lg:w-2/4">
        <div className="flex flex-col items-start">
        <img className="h-10 w-auto" src="public/MobiMed logo.svg" alt="Mobimed Pharmacy" />
          <h1 className="text-4xl font-bold text-start mb-4">Sign Up To</h1>
          <h2 className="text-xl text-black text-start "><span className='text-green-600'>Mobi</span>Med Pharmacy Ghana.</h2>
          <p className="text-sm text-gray-600 mb-4">
            if you have an Account with us you can {' '}
            <a href="/signup" className=" hover: transition duration-300 ease-in-out">
              Login here
            </a>
          </p>
        </div>

          <form onSubmit={handleSubmit} className='w-auto p-5'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { id: 'firstName', type: 'text', placeholder: 'First Name', icon: icons.user },
                { id: 'lastName', type: 'text', placeholder: 'Last Name', icon: icons.user },
                { id: 'gender', type: 'text', placeholder: 'Gender', icon: icons.venusMars },
                { id: 'dateOfBirth', type: 'date', icon: icons.calendarAlt },
                { id: 'phoneNumber', type: 'tel', placeholder: 'Phone Number', icon: icons.phone },
                { id: 'ghanaCardID', type: 'text', placeholder: 'Ghana Card ID', icon: icons.idCard },
                { id: 'location', type: 'text', placeholder: 'Location', icon: icons.mapMarkerAlt },
                { id: 'addressGPS', type: 'text', placeholder: 'Address GPS', icon: icons.mapPin },
                { id: 'insuranceNumber', type: 'text', placeholder: 'Insurance Number', icon: icons.idBadge },
                { id: 'password', type: 'password', placeholder: 'Password', icon: icons.lock },
                { id: 'confirmPassword', type: 'password', placeholder: 'Confirm Password', icon: icons.lock },
              ].map(({ id, type, placeholder, icon }, index) => (
                <div key={id} className="flex flex-col ">
                  <div className="relative flex items-center">
                    <div className="absolute left-3 text-stone-400">
                      {icon}
                    </div>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      autoComplete={id}
                      required={id !== 'insuranceNumber'}
                      className={`${index >= 6 ? 'bg-violet-100' : 'bg-red-50'
                        } rounded w-full pl-10 pr-10 py-3 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring focus: transition duration-300 ease-in-out`}
                      placeholder={placeholder}
                      value={(formData as any)[id]}
                      onChange={handleChange}
                      disabled={id === 'location'}
                    />
                  </div>
                  {errors[id] && (
                    <p className="text-blue-100 text-xs mt-1 transition duration-300 ease-in-out">
                      {errors[id]}
                    </p>
                  )}
                </div>
              ))}

              {/* Add the dropdown for patient type separately */}
              <div className="flex flex-col relative">
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-stone-400">
                    {icons.user}
                  </div>
                  <select
                    id="patientType"
                    name="patientType"
                    className="bg-violet-100 text-stone-400 rounded w-full pl-10 pr-2 py-3 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring focus:border-red-100 transition duration-300 ease-in-out"
                    value={formData.patientType}
                    onChange={handleChange}
                  >
                    <option value="Walk-in">Walk-in</option>
                    <option value="Insurance Walk-in">Insurance Walk-in</option>
                  </select>
                </div>
                {errors.patientType && (
                  <p className="text-blue-100 text-xs mt-1 transition duration-300 ease-in-out">
                    {errors.patientType}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className=" text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full sm:w-auto"
              >
                Register
              </button>
            </div>
          </form>
      </div>
    </Container>
  );
};

export default Signup;
