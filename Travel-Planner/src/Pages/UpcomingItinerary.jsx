import { useEffect, useState } from "react";

const UpcomingItinerary = () => {
  const [nextTrip, setNextTrip] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('http://localhost:9000/api/itineraries/next')
      .then((response) => response.json())
      .then((data) => setNextTrip(data));
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 my-8 mx-auto max-w-xl font-roboto transition-transform hover:shadow-2xl hover:-translate-y-2">
      <h2 className="text-gray-800 text-2xl font-semibold text-center mb-6 uppercase tracking-wide">Your Next Trip</h2>
      {nextTrip ? (
        <div className="bg-blue-50 rounded-lg p-6 my-4 shadow-sm transition-shadow hover:shadow-md">
          <p className="text-blue-500 font-medium text-lg mb-2">Destination:</p>
          <p className="text-gray-800 text-xl font-normal mb-4">{nextTrip.destination}</p>
          <p className="text-blue-500 font-medium text-lg mb-2">Dates:</p>
          <p className="text-gray-800 text-xl font-normal">{nextTrip.startDate} - {nextTrip.endDate}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg italic bg-yellow-100 rounded-lg p-6 mt-5">No upcoming trips found. Start planning now!</p>
      )}
    </div>
  );
};

export default UpcomingItinerary;
