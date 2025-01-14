import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const features = [
    {
      title: 'Flights',
      description: 'Search and book flights for your travel.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.5nU2XowC2eUgpvA2_Hta7QHaEK&pid=Api&P=0&h=180', // Replace with your actual image path
      path: '/flight',
    },
    {
      title: 'Hotels',
      description: 'Find and reserve accommodations.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.EY_ZEoRXJ7jq1M-0-CyTewHaE7&pid=Api&P=0&h=180', // Replace with your actual image path
      path: '/hotel',
    },
    {
      title: 'Trains',
      description: 'Check train availability and make bookings.',
      image: 'https://tse4.mm.bing.net/th?id=OIP.eo4oT4bFaymxlqrJnIBviAHaEk&pid=Api&P=0&h=180', // Replace with your actual image path
      path: '/train',
    },
    {
      title: 'Holiday Packages',
      description: 'Discover and book exciting holiday packages.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.NrCcoUlfv1NDVWtNtojCLgHaEc&pid=Api&P=0&h=180', // Replace with your actual image URL
      path: '/HolidayPackage',
    },
  ];

  return (
    <div className="text-center p-5">
      <h2 className="mb-5 text-2xl font-bold text-gray-800">Explore Bookings</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-64 border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            onClick={() => navigate(feature.path)}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="mb-2 text-lg font-semibold text-blue-500">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
