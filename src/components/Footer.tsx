import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaLocationArrow, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: FaFacebook,
      link: "(link unavailable)",
    },
    {
      icon: FaTwitter,
      link: "(link unavailable)",
    },
    {
      icon: FaInstagram,
      link: "(link unavailable)",
    },
  ];

  const companyInfo = [
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "Features",
      link: "#",
    },
  ];

  const getInTouch = [
    {
      title: <><FaPhone /> +0123456789</>,
      link: "tel:+0123456789",
    },
    {
      title: <><FaEnvelope /> info@8pxlstudio</>,
      link: "mailto:info@8pxlstudio",
    },
    {
      title: <><FaLocationArrow /> 021 Hollywood Boulevard, LA</>,
      link: "#",
    },
  ];

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="src/assets/logo-footer.png"
              alt="main-logo"
              className="md:w-* md:h-*"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold">Company</h5>
            <ul className="list-none mb-0">
              {companyInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-600 hover:text-gray-800">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold">Get in Touch</h5>
            <ul className="list-none mb-0">
              {getInTouch.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-600 hover:text-gray-800">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold">Join Our Company</h5>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 pl-10 text-sm text-white  border-none"
              />
              <button className="bg-[#1E1E1E] hover:bg-[#57bddd] text-white font-bold border none">
                <FaArrowRight />
              </button>
            </form>
            <div className="flex justify-center mt-4">
              {socialMediaLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-600 hover:text-gray-800 mx-2"
                >
                  <item.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-white"></div>
      <p className="text-center text-gray-600">
        © 2025 Unpack. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;