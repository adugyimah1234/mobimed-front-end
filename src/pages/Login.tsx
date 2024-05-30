import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import Icons from 'styled-components'

const BackgroundContainer = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  padding: 3.5rem;
  justify-content: center;
  background: url('src/assets/Signup.jpeg') no-repeat center center;
  background-size: cover;
`;

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 rounded-full"
  >
    {/* Your Facebook SVG path here */}
  </svg>
);

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 rounded-full"
  >
    {}
  </svg>
);

const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-8 h-8 rounded-full"
  >
    {/* Your Apple SVG path here */}
  </svg>
);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <BackgroundContainer>
      <div className="flex flex-col md:flex-row gap-10 p-20 bg-white rounded-lg shadow-md md:w-2/3 lg:w-2/4">
        <div className="flex flex-col items-start">
        <img className="h-10 w-auto" src="public/MobiMed logo.svg" alt="Mobimed Pharmacy" />
          <h1 className="text-4xl font-bold text-start mb-4">Login In To</h1>
          <h2 className="text-xl text-black text-start "><span className='text-green-600'>Mobi</span>Med Pharmacy Ghana.</h2>
          <p className="text-sm text-gray-600 mb-4">
            if you don't have an Account with us you can,{' '}
            <a href="/signup" className=" hover: transition duration-300 ease-in-out">
              Create one here
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-contain">

          <div className="mb-4 p-2">
            <input
              className="w-full bg-red-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
              type="email"
              id="email"
              name="email"
              placeholder='Enter email or username'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 p-2">
            <input
              className="w-full px-3 p-10 bg-red-100 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400"
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between continer items-center mb-6">
            <div className="flex items-center container">
              <input
                type="checkbox"
                className="w-fit h-4 border-gray-300 rounded focus:ring-ring-blue-500 focus:ring-w-2"
                id="remember"
                name="remember"
              />
              <label className="text-gray-500 ml-2" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg shadow-slate-600 text-white font-bold hover: focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
<div className="flex items-center justify-center mt-4">
            <span className="mr-2 text-sm text-gray-500">or continue with</span>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:underline">
                <FacebookIcon />
              </a>
              <a href="#" className="text-sm hover:underline">
                <GoogleIcon />
              </a>
              <a href="#" className="text-sm text-red-500 hover:underline">
                <AppleIcon />
              </a>
            </div>
          </div>
        </form>
      </div>
    </BackgroundContainer>
  );
};

export default Login;
