import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const loginButton = (
    <a
      href="/login"
      className="hidden lg:flex px-4 py-2 text-sm font-medium text-[#29AADF] rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      Log In
    </a>
  );

  const signupButton = (
    <a
      href="/signup"
      className="hidden ml-2 lg:flex px-4 py-2 text-sm font-medium rounded-md bg-[#26a5e0] hover: text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
    >
      Sign Up
    </a>
  );

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-whitesmoke">
      <a href="/" className="pl-3 block cursor-pointer w-[20rem] h-auto">
        <img rel="icon" src="/MobiMed logo.svg" alt="Logo" className="max-w-[30%] h-auto" />
      </a>
      <div className={`hidden lg:flex`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-black hover:text-[#57BDDD] font-medium p-3 mx-4">
            {link.label}
          </a>
        ))}
      </div>
      <div className="lg:hidden">
        <button
          className="focus:outline-none bg-white text-primary"
          onClick={handleToggle}
        >
          <svg className={`h-6 w-6 text-wrap-700 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute text-white top-15 left-0 mt-2 py-2 w-full  bg-white shadow-md rounded-md z-50 transition-all duration-300 ease-in-out transform opacity-100">
            {navLinks.map((link) => (
              <li key={link.href} className="px-4 py-1 hover:bg-gray-100">
                <a href={link.href} className="text-gray-700 block font-medium">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-4 py-1">
              <a
                href="/login"
                className="block px-4 py-2 text-sm font-medium border rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Log In
              </a>
            </li>
            <li className="px-4 py-1">
              <a
                href="/signup"
                className="block px-4 py-2 text-sm font-medium text-black rounded-md bg-gradient-to-tr from-[#57BDDD] to-[#62c2df] hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Sign Up
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="hidden md:flex items-center">
        {loginButton}
        {signupButton}
      </div>
    </nav>
  );
};

export default Navbar;
