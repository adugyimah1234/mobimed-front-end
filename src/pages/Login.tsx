// Signup.tsx
import React, { useState } from 'react';

interface SignUpForm {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Implement form submission logic here
    console.log('Form submitted!', formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="px-8 py-6 bg-white rounded-lg shadow-md md:w-1/3">
        <h1 className="text-2xl font-bold text-center mb-4">imedic PHARMACY</h1>
        <h2 className="text-xl font-semibold text-center mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 block mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 block mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-ring-blue-500 focus:ring-w-2"
                id="remember"
                name="remember"
              />
              <label className="text-gray-500 ml-2" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center mt-4">
            <span className="mr-2 text-sm text-gray-500">or continue with</span>
            <a href="#" className="text-sm text-black"></a>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Facebook
            </a>
            <a href="#" className="ml-4 text-sm text-red-500 hover:underline">
              Google
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;