import React from 'react';

interface Prescription {
  name: string;
  email: string;
  date: string;
  time: string;
  pharmacy: string;
  prescription: string;
}

const PrescriptionHistory: React.FC = () => {
  const prescriptions: Prescription[] = [
    {
      name: 'Leslie Alexander',
      email: 'lesie.alexander@example.com',
      date: '0/10/2020',
      time: '10:00:23 am',
      pharmacy: 'Jacob Jones',
      prescription: 'view',
    },
    {
      name: 'Ronald Richards',
      email: 'lesie.alexander@example.com',
      date: '0/12/2020',
      time: '1:00:32 pm',
      pharmacy: 'Theresa Webb',
      prescription: 'view',
    },
    {
      name: 'Jane Cooper',
      email: 'lesie.alexander@example.com',
      date: '0/13/2020',
      time: '12:23:30 pm',
      pharmacy: 'Jacob Jones',
      prescription: 'view',
    },
    {
      name: 'Robert Fox',
      email: 'lesic.alexander@example.com',
      date: '0/14/2020',
      time: '04:50:43 am',
      pharmacy: 'Arlene McCoy',
      prescription: 'view',
    },
    {
      name: 'Jenny Wilson',
      email: 'lesie.alexander@example.com',
      date: '0/15/2020',
      time: '14:12:56 pm',
      pharmacy: 'Esther Howard',
      prescription: 'view',
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Prescription History</h1>
        <table className="w-full rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left text-sm font-medium">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Pharmacy</th>
              <th className="px-4 py-2">Prescription</th>
              <th className="px-4 py-2">Track Request</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((prescription) => (
              <tr key={prescription.name} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="px-4 py-2">{prescription.name}</td>
                <td className="px-4 py-2">{prescription.email}</td>
                <td className="px-4 py-2">{prescription.date}</td>
                <td className="px-4 py-2">{prescription.time}</td>
                <td className="px-4 py-2">{prescription.pharmacy}</td>
                <td className="px-4 py-2">{prescription.prescription}</td>
                <td className="px-4 py-2 text-blue-500 hover:text-blue-700">Track>></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrescriptionHistory;