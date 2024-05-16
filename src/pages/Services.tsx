import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
  const serviceItems = [
    {
      image: 'src/assets/uploadPrescription.png',
      title: 'Upload Prescription',
      description: 'Start your journey to better health by uploading your prescription to our secure platform. Our user-friendly interface makes it easy to upload and manage your prescriptions, so you can focus on what matters most - your health.',
    },
    {
      image: 'src/assets/payout.png',
      title: 'Checkout & Payment',
      description: 'Our streamlined checkout process makes it easy to pay for your medications. We accept a variety of payment methods, including credit cards, debit cards, and online payment services. Plus, our secure payment processing ensures your information is protected.',
    },
    {
      image: 'src/assets/dispatch.png',
      title: 'Dispatch & Tracking',
      description: 'Once your order is processed, our team works quickly to dispatch your medications. You can track the status of your order in real-time, so you always know when to expect your delivery.',
    },
    {
      image: 'src/assets/searchMedications.jpg',
      title: 'Search for Medications',
      subtitle: '',
      description: 'Find the medications you need quickly and easily with our advanced search feature. Filter results by name, ingredient, or condition to find the perfect match for your needs.',
    },
    {
      image: 'src/assets/deliveryOptions.jpg',
      title: 'Delivery Options',
      description: 'Choose from a range of delivery options to suit your needs. Whether you prefer standard shipping, express shipping, or in-store pickup, we got you covered.',
    },
    {
      image: 'src/assets/customerSupport.jpg',
      title: 'Customer Support',
      description: "Our dedicated customer support team is here to help. Whether you have questions about your order, need help with a prescription, or just need some advice, we've always here to assist you.",
    },
    {
      image: 'src/assets/securityPrivacy.jpg',
      title: 'Security and Privacy',
      description: 'We take your security and privacy seriously. Our platform uses state-of-the-art encryption and secure servers to protect your information, so you can feel confident when shopping with us.',
    },
    {
      image: 'src/assets/refundCancellation.jpg',
      title: 'Refund and Cancellation Policy',
      description: "We want you to be completely satisfied with your purchase. If for any reason you're not happy, we offer a flexible refund and cancellation policy to help you get the resolution you need.",
    },
  ];

  return (
    <div className=" mx-auto pt-2 pb-1     bg-white shadow-md">
      <Navbar />
      <img src="src/assets/servicehero.png" className='bg-cover flex justify-center items-center'/>
      <div className="text-center mb-5 mt-10 items-start">
        <h2 className=" text-3xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
          Our Services
        </h2>
        <p className=" text-base antialiased font-normal leading-relaxed text-gray-700">
          We offer a range of services to make your experience with us seamless and convenient.
        </p>
      </div>
      {serviceItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-wrap max-w-5xl0 items-center justify-center mb-12 px-50"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {index % 2 === 0 ? (
            <div
              className="relative w-full md:w-1/2 xl:w-1/3 p-6 text-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={item.image}
                alt="card-image"
                className="object-cover w-auto h-auto rounded-lg"
              />
            </div>
          ) : (
            <div
              className="w-full md:w-1/2 xl:w-2/3 p-6 text-lg"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h6
                className="block mb-4  text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase"
              >
                {item.subtitle}
              </h6>
              <h4
                className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
              >
                {item.title}
              </h4>
              <p
                className="block mb-8 text-base antialiased font-normal leading-relaxed text-gray-700"
              >
                {item.description}
              </p>
            </div>
          )}
          {index % 2 !== 0 ? (
            <div
              className="relative w-full md:w-1/2 xl:w-1/3 p-6 text-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src={item.image}
                alt="card-image"
                className="object-cover w-auto h-auto rounded-lg"
              />
            </div>
          ) : (            <div
            className="w-full md:w-1/2 xl:w-2/3 p-6 text-lg"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h6
              className="block mb-4 text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase"
            >
              {item.subtitle}
            </h6>
            <h4
              className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
            >
              {item.title}
            </h4>
            <p
              className="block mb-8 text-base antialiased font-normal leading-relaxed text-gray-700"
            >
              {item.description}
            </p>
          </div>
        )}
      </div>
    ))}
    <Footer />
  </div>
);
}

export default Services;