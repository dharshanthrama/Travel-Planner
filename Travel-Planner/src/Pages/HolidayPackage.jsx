import { useEffect, useState } from "react";

const HolidayPackage = () => {
  const [holidayPackages, setHolidayPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9000/api/holiday-packages/") // Adjust this URL to match your backend route
      .then((response) => response.json())
      .then((data) => {
        setHolidayPackages(data);
        setLoading(false); // Once data is loaded, set loading to false
      })
      .catch((error) => {
        console.error("Error fetching holiday packages:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-5 font-sans text-gray-800 bg-gray-100 min-h-screen">
      <h2 className="text-center mb-8 text-3xl font-bold text-blue-600">
        Holiday Package Details
      </h2>
      {loading ? (
        <p className="text-center text-lg">Loading holiday package details...</p>
      ) : holidayPackages.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-5">
          {holidayPackages.map((pkg, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 w-72 bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <h3 className="mb-2 text-xl font-semibold text-blue-600">
                {pkg.destination}
              </h3>
              <p className="text-gray-600">
                <strong>Description:</strong> {pkg.description}
              </p>
              <p className="text-gray-600">
                <strong>Accommodation:</strong> {pkg.accommodation}
              </p>
              <p className="text-gray-600">
                <strong>Transport:</strong> {pkg.transport}
              </p>
              <p className="text-gray-600">
                <strong>Meals:</strong> {pkg.meals}
              </p>
              <p className="text-gray-600">
                <strong>Activities:</strong> {pkg.activities}
              </p>
              <p className="text-gray-600">
                <strong>Insurance:</strong> {pkg.insurance}
              </p>
              <p className="text-gray-600">
                <strong>Start Date:</strong> {pkg.startDate}
              </p>
              <p className="text-gray-600">
                <strong>End Date:</strong> {pkg.endDate}
              </p>
              <p className="text-gray-600">
                <strong>Duration:</strong> {pkg.duration} days
              </p>
              <p className="mt-4 text-lg font-bold text-green-600">
                Price: ${pkg.price}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-600">
          No holiday packages found. Please try again later.
        </p>
      )}
    </div>
  );
};

export default HolidayPackage;
