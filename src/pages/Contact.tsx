import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ContactInfo {
  title: string;
  content: string;
}

const contactInfo: ContactInfo[] = [
  { title: 'Email', content: 'info@yourclinic.com' },
  { title: 'Phone Number', content: '(555) 555-5555' },
  { title: 'Address', content: '123 Main Street, Anytown, CA 12345' },
];

function Contact() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100 py-30 px-0">
        
        <div className="bg-[#57BDDD] text-white py-16 px-20 flex justify-center items-center">
      <h1 className="text-4xl font-bold">Contact Us</h1>
    </div>
        <div className="bg-white pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:space-x-16">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
            <p className="text-gray-600 leading-loose">We're here to help! Reach out for any questions.</p>
          </div>
          <ul className="mt-6 list-disc space-y-2 text-gray-600">
            {contactInfo.map((info) => (
              <li key={info.title}>{info.title}: {info.content}</li>
            ))}
          </ul>
          <div className="flex items-center justify-center ">
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              Directions
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Larger Map
            </a>
          </div>
        </div>
      </div>
    </div>
        <div className="bg-black border radius-23 p-23 flex">
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
            <p className="text-gray-600 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor quis diam pulvinar elementum. Aenean lacinia bibendum nulla sed consectetur.
            </p>
            <p className="text-gray-600 leading-loose mt-4">
              Suspendisse potenti. Nulla facilisi. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
            <ul className="mt-6 list-disc space-y-2">
              {contactInfo.map((info) => (
                <li key={info.title} className="text-gray-600">
                  {info.title}: {info.content}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <form className="space-y-4">
              <div className="flex flex-wrap">
                <label htmlFor="name" className="w-full mb-2 text-sm font-medium text-gray-700">
                  Your Name:
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-wrap">
                <label htmlFor="email" className="w-full mb-2 text-sm font-medium text-gray-700">
                  Email Address:
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-wrap">
                <label htmlFor="message" className="w-full mb-2 text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows= "5"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-blue-500 text-white font-medium focus:outline-none hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;




    
