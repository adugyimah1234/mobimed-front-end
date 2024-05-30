import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


interface ContactInfo {
  title: string;
  content: string;
  address?: string;
  latitude?: number;
  longitude?: number;
}

const contactInfo: ContactInfo[] = [
  {
    title: 'Head Office',
    content: 'info@mobimedgh.com',
    address: 'Osu, Ako-Adjei Opposite Kingdom Books & Stationery',
    latitude: 5.5543,
    longitude: -0.1854,
  },
  {
    title: 'Accra Branch',
    content: '+(233) 557 804 447',
    address: 'Accra Central, Near City Hall',
    latitude: 5.5551,
    longitude: -0.1862,
  },
  {
    title: 'Kumasi Branch',
    content: '+(233) 557 804 448',
    address: 'Kumasi, Adum Near SSNIT',
    latitude: 6.6895,
    longitude: -1.6244,
  },
  // Add more branches here
];

function Contact() {
  return (
    <div className="bg-gray-100 py-0 pd-5">
      <Navbar />
      <div className='bg-[url(src/assets/contact1.jpg)] bg-no-repeat bg-cover min-h-52 py-11 text-bold bg-purple-400 scroll-py-20'>

      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
            <p className="text-gray-600 leading-loose">
              Get in touch with us for any inquiries, feedback, or support. We're here to help!
            </p>
            <ul className="mt-6 list-none space-y-2">
              {contactInfo.map((info) => (
                <li key={info.title} className="text-gray-600">
                  <h3 className="text-lg font-bold">{info.title}</h3>
                  <p>
                    {info.content}
                    {info.address && (
                      <div>
                        <span>Address: {info.address}</span>
                        <span>

                        </span>
                      </div>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <form className="space-y-4">
              <div className="flex flex-wrap">
                <label
                  htmlFor="name"
                  className="w-full mb-2 text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="email"
                  className="w-full mb-2 text-sm font-medium text-gray-700"
                >
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
                <label
                  htmlFor="message"
                  className="w-full mb-2 text-sm font-medium text-gray-700"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={5}
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
      <Footer />
    </div>
  );
}

export default Contact;