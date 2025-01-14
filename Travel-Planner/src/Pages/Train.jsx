import React, { useState } from 'react';
import axios from 'axios';

const Train = () => {
  const [trainNameOrNumber, setTrainNameOrNumber] = useState('');
  const [trainData, setTrainData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedTrain, setExpandedTrain] = useState(null);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleSearch = async () => {
    if (!trainNameOrNumber) {
      alert('Please enter a train name or number');
      return;
    }

    setLoading(true);
    setError(null);

    const options = {
      method: 'GET',
      url: `https://indian-railway-irctc.p.rapidapi.com/api/trains-search/v1/train/${trainNameOrNumber}`,
      headers: {
        'x-rapidapi-key': 'f38a20899fmsh15ebb5c8a3e2febp15d77fjsn570d23ff34ad',
        'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);

      if (response.data && response.data.body && response.data.body.length > 0) {
        const trains = response.data.body[0]?.trains || [];
        setTrainData(trains);
        setError(null);
      } else {
        setError('No trains found or error fetching data.');
        setTrainData([]);
      }
    } catch (err) {
      console.error('Error fetching train status:', err);
      setError('Error fetching train status. Please try again.');
      setTrainData([]);
    }
    setLoading(false);
  };

  const toggleSchedule = (trainNumber) => {
    if (expandedTrain === trainNumber) {
      setExpandedTrain(null);
    } else {
      setExpandedTrain(trainNumber);
    }
  };

  const renderRunningDays = (runningOn) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="font-semibold text-yellow-400">{day}</span>
            <span
              className={`font-bold mt-2 ${
                runningOn[index] === 'Y' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {runningOn[index] === 'Y' ? 'Yes' : 'No'}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 via-gray-800 to-red-900 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center w-full text-yellow-400">Indian Railways - Train Search</h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8 w-3/5 max-w-full">
        <input
          type="text"
          value={trainNameOrNumber}
          onChange={(e) => setTrainNameOrNumber(e.target.value)}
          placeholder="Enter Train Name or Number"
          className="border border-gray-300 p-3 rounded-lg w-full md:w-3/4 focus:ring focus:ring-blue-300 text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transition w-full md:w-1/4">
          Search
        </button>
      </div>

      {loading && <div className="text-center text-yellow-300 font-semibold">Loading...</div>}
      {error && <p className="text-red-500 text-left font-semibold">{error}</p>}

      {trainData.length > 0 && (
        <div className="bg-gray-900 bg-opacity-90 border border-gray-700 rounded-lg shadow-lg p-6 w-full max-w-7xl">
          <h2 className="font-bold text-xl text-yellow-400 mb-3 text-center w-full">Train Information</h2>
          {trainData.map((train, index) => (
            <div
            key={index}
            className={`mb-6 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition text-left w-full ${
              expandedTrain === train.trainNumber ? 'h-auto' : 'min-h-[400px]' 
            }`}
          >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSchedule(train.trainNumber)}
              >
                <h3 className="font-semibold text-yellow-500 text-lg mb-2 text-center w-full">
                  <span className="text-green-600">Train Name : </span>  {train.trainName}
                </h3>
                <span className="text-white text-2xl">
                  {expandedTrain === train.trainNumber ? '⬆️' : '⬇️'}
                </span>
              </div>

              {/* Centered Information */}
              <div className="text-center mb-4">
                <p><span className="font-bold">Train Number:</span> {train.trainNumber}</p>
                <p><span className="font-bold">Origin:</span> {train.origin}</p>
                <p><span className="font-bold">Destination:</span> {train.destination}</p>
              </div>

              {/* Running Days */}
              {train.runningOn && (
                <>
                  <h4 className="mt-4 font-semibold text-yellow-400 text-center">Running On:</h4>
                  {renderRunningDays(train.runningOn)}
                </>
              )}

              {/* Journey Classes */}
              {train.journeyClasses && train.journeyClasses.length > 0 && (
                <>
                  <h4 className="mt-4 font-semibold text-yellow-400 text-center">Journey Classes:</h4>
                  <div className="flex flex-wrap justify-center gap-4 mt-2">
                    {train.journeyClasses.map((className, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-500 text-white py-1 px-4 rounded-full text-sm font-bold shadow-md hover:bg-blue-600 transition"
                      >
                        {className}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {expandedTrain === train.trainNumber && train.schedule && train.schedule.length > 0 && (
                <>
                  <h4 className="mt-4 font-semibold text-yellow-400 text-center">Schedule:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {train.schedule.map((station, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition text-left"
                      >
                        <h5 className="font-bold"><span className='text-green-400'>Station Name : </span>{station.stationName}</h5>
                        <p><span className="font-semibold">Arrival Time:</span> {station.arrivalTime || '--'}</p>
                        <p><span className="font-semibold">Departure Time:</span> {station.departureTime || '--'}</p>
                        <p><span className="font-semibold">Route Number:</span> {station.routeNumber}</p>
                        <p><span className="font-semibold">Distance:</span> {station.distance} km</p>
                        <p><span className="font-semibold">Halt Time:</span> {station.haltTime || '--'}</p>
                        <p><span className="font-semibold">Boarding Disabled:</span> {station.boardingDisabled === 'true' ? 'Yes' : 'No'}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Train;
