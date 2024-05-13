import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });

  const navLinks = [
    { href: '/home', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const loginButton = (
    <a
      href="/login"
      className="hidden lg:flex px-4 py-2 font-sans text-sm font-medium text-white rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      Log In
    </a>
  );

  const signupButton = (
    <a
      href="/signup"
      className="hidden ml-2 lg:flex px-4 py-2 font-sans text-sm font-medium text-white rounded-md bg-gradient-to-tr from-[#57BDDD] to-[#62c2df] hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
    >
      Sign In
    </a>
  );

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-whitesmoke shadow-md lg:px-8">
      <a href="/" className="block cursor-pointer">
        <img src="src/assets/logo.png" alt="Logo" className="max-w-[50%] h-auto" />
      </a>
      <div className={`hidden ${isDesktopOrLaptop ? 'lg:flex' : 'lg:hidden'}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-gray-700 hover:text-black font-medium">
            {link.label}
          </a>
        ))}
      </div>
      <div className={"lg:hidden ${isOpen ? 'block' : 'hidden'}"}>
        <button
          className={`focus:outline-none ${isOpen ? '' : 'bg-transparent'}`}
          onClick={handleToggle}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        {isOpen && (
          <ul className={` top-full mt-2 py-2 w-auto bg-white shadow-md rounded-md z-50 ${isOpen ? '' : 'hidden lg:block'
            }`}>
            {navLinks.map((link) => (
              <li key={link.href} className="px-4 py-1 hover:bg-gray-100">
                <a href={link.href} className=" text-gray-700 block font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center ">
        {loginButton}
        {signupButton}
      </div>
    </nav>
  );
}

export default Navbar;
