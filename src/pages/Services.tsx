import React from 'react';
import Navbar from '../components/Navbar';

function Services() {
  const serviceItems = [
    {
      image: '(link unavailable)',
      title: 'Upload Prescription',
      subtitle: 'Step 1',
      description: 'Begin by uploading your prescription on our user-friendly website. Ensure that the prescription is clear and includes all necessary details.',
    },
    {
      image: '(link unavailable)',
      title: 'Consult a Doctor',
      subtitle: 'Step 2',
      description: 'Our team of experienced doctors will review your prescription and provide a personalized consultation.',
    },
    {
      image: '(link unavailable)',
      title: 'Get Your Medication',
      subtitle: 'Step 3',
      description: 'Once your consultation is complete, we will dispense your medication and have it shipped directly to your doorstep.',
    },
  ];

  return (
    <div>
      <Navbar />
      {serviceItems.map((item, index) => (
        <div key={index} className="w-full  mx-auto flex bg-white text-gray-700 shadow-md ">
          <div
            className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={item.image}
              alt="card-image" className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h6
              className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              <svg xmlns="(link unavailable)" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
              </svg>
              {item.subtitle}
            </h6>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.title}
            </h4>
            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              {item.description}
            </p>
            <a href="#" className="inline-block"><button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button">
              Next </button></a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;