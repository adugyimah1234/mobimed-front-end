import React from 'react';
import Link from 'react'
import '../index.css';
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
      title: <><FaPhone /> +233 557 804 447 <br /><>+233 509 557 551</></>,      
      link: "tel:+233557804447",
    },
    {
      title: <><FaEnvelope /> info@mobimedgh.com</>,
      link: "info@mobimedgh.com",
    },
    {
      title: <><FaLocationArrow /> Osu, Ako-Adjei Opposite Kingdom Books & Stationery</>,
      link: "#",
    },
  ];

  return (
    <footer className=" inset-0 bg-black bg-cover py-12 w-full px-12">
      <div className=" bg container mx-auto ">
        <div className="flex flex-wrap justify-between">
          <div className="w-[50%] md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <img
              src="/MobiMed logo.svg"
              alt="main-logo"
              className="md:w-* md:h-*"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold text-white">Company</h5>
            <ul className="list-none mb-0">
              {companyInfo.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="font-medium text-[#dadada] text-whitesmoke hover:text-gray-800">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold text-white">Get in Touch</h5>
            <ul className="list-none mb-0 ">
              {getInTouch.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="flex gap-2 text-[#dadada] hover:text-gray-800">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <h5 className="text-lg font-bold text-[#57bddd] p-2 text-left">Join Our Company</h5>
            <form className="flex ">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 pl-10 text-sm text-white bg-[#1f1f21] border-none"
              />
              <a className="bg-[#000000] hover:bg-[#57bddd] text-white font-bold border-slate-800 p-2 py-2">
                <FaArrowRight />
              </a>
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
        <div className="border-b border-whitesmoke"></div>
      <p className="text-center text-white p-10">
        © 2025 Unpack. All Rights Reserved.
      </p>
      </div>
    </footer>
  );
};

export default Footer;