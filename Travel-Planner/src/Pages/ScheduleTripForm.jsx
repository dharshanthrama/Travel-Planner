import { useState } from "react";

const ScheduleTripForm = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the trip data to send to the backend
    const tripData = {
      destination,
      startDate,
      endDate,
    };

    // Make a POST request to schedule the trip
    fetch("http://localhost:9000/api/itineraries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Trip scheduled:", data);
      })
      .catch((error) => {
        console.error("Error scheduling trip:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 font-medium">Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter destination"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 font-medium">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-gray-700 font-medium">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Schedule Trip
      </button>
    </form>
  );
};

export default ScheduleTripForm;
