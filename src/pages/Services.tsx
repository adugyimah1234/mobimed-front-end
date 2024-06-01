import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
  const serviceItems = [
    {
      image: 'src/assets/TeleHealth.jpg',
      title: 'TeleHealth Consultations',
      description: 'Connect with our healthcare professionals from the comfort of your own home. Get personalized advice and treatment plans via video calls or messaging.',
    },
    {
      image: 'src/assets/Health_Screening1.png',
      title: 'Health Screening',
      description: 'Stay on top of your health with regular check-ups and tests. Identify potential health issues early and take proactive steps.',
    },
    {
      image: 'src/assets/Specialty1.png',
      title: 'Specialty Medicine Delivery',
      description: 'Get your prescription medications delivered right to your doorstep. Access hard-to-find and specialty medicines with ease.',
    },
    {
      image: 'src/assets/PostDischargeSupport.jpg',
      title: 'Post-Discharge Support',
      subtitle: '',
      description: 'Receive guidance and support after hospitalization. Ensure a smooth transition and continued care.',
    },
    {
      image: 'src/assets/TherapyManagement.jpg',
      title: 'Medication Therapy Management',
      description: 'Get personalized guidance on medication use and potential interactions. Maximize the effectiveness of your medications.',
    },
    {
      image: 'src/assets/AutoRefillProgramme.jpg',
      title: 'Auto-Refill Programme',
      description: "Never miss a dose with automatic refills and renewals. Stay on track with your medication regimen.",
    },
    {
      image: 'src/assets/OTCProductDelivery.jpg',
      title: 'OTC Product Delivery',
      description: 'Get over-the-counter medications and health products delivered to your door. Conveniently manage your health and wellness.',
    },
  ];

  return (
    <div className="mx-auto pt-2 pb-1 bg-white shadow-md">
      <Navbar />
      <img src="src/assets/herosection.png" />
      <div className="text-center mb-5 mt-10 items-start">
        <h2 className="text-3xl antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
          Our Services
        </h2>
        <p className="text-base antialiased font-normal leading-relaxed text-gray-700">
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
          ) : (
            <div
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