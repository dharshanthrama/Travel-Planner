import React, { useState } from 'react';
import axios from 'axios';

function Flight() {
 
  const [originAirport, setOriginAirport] = useState('HYD');
  const [destinationAirport, setDestinationAirport] = useState('DEL');
  const [departureDate, setDepartureDate] = useState('2025-01-28');
  const [adultCount, setAdultCount] = useState(1);
  const [numberOfStops, setNumberOfStops] = useState('all');
  const [cabinClass, setCabinClass] = useState('ECONOMY');
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [currency, setCurrency] = useState('INR');  
  const [durationRange, setDurationRange] = useState({ min: 0, max: 0 });

  
  const handleOriginAirportChange = (e) => setOriginAirport(e.target.value);
  const handleDestinationAirportChange = (e) => setDestinationAirport(e.target.value);
  const handleDepartureDateChange = (e) => setDepartureDate(e.target.value);
  const handleAdultCountChange = (e) => setAdultCount(e.target.value);
  const handleNumberOfStopsChange = (e) => setNumberOfStops(e.target.value);
  const handleCabinClassChange = (e) => setCabinClass(e.target.value);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFlightData([]);

    try {
      const options = {
        method: 'GET',
        url: 'https://booking-com18.p.rapidapi.com/flights/search-oneway',
        params: {
          fromId: originAirport,
          toId: destinationAirport,
          departureDate: departureDate,
          cabinClass: cabinClass,
          numberOfStops: numberOfStops,
        },
        headers: {
          'x-rapidapi-key': '644f09699bmsh688d6d020f7f011p157ecbjsnc5801399ac6e',
          'x-rapidapi-host': 'booking-com18.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);

      console.log(response.data);

      if (response.data.status) {
       
        setFlightData(response.data.data.routes);

       
        setPriceRange({
          min: response.data.data.resultSetMetaData.priceRange.min,
          max: response.data.data.resultSetMetaData.priceRange.max,
        });

        const minDurationInMs = response.data.data.resultSetMetaData.travelTimeRange.min;
        const maxDurationInMs = response.data.data.resultSetMetaData.travelTimeRange.max;

        const minDurationInHours = (minDurationInMs / 3600000).toFixed(2);
        const maxDurationInHours = (maxDurationInMs / 3600000).toFixed(2); 

      
        setDurationRange({
          min: minDurationInHours,
          max: maxDurationInHours,
        });
      } else {
        setError('No flights found or there was an issue with the search.');
      }
    } catch (err) {
      setError('Error fetching flight data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Search Flights</h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      
        <div>
          <label htmlFor="originAirport" className="block text-sm font-medium text-gray-800">Origin Airport</label>
          <input
            type="text"
            id="originAirport"
            value={originAirport}
            onChange={handleOriginAirportChange}
            placeholder="Enter Origin Airport (Code)"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

      
        <div>
          <label htmlFor="destinationAirport" className="block text-sm font-medium text-gray-800">Destination Airport</label>
          <input
            type="text"
            id="destinationAirport"
            value={destinationAirport}
            onChange={handleDestinationAirportChange}
            placeholder="Enter Destination Airport (Code)"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

     
        <div>
          <label htmlFor="departureDate" className="block text-sm font-medium text-gray-800">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

       
        <div>
          <label htmlFor="adultCount" className="block text-sm font-medium text-gray-800">Number of Adults</label>
          <input
            type="number"
            id="adultCount"
            value={adultCount}
            onChange={handleAdultCountChange}
            min="1"
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
            required
          />
        </div>

       
        <div>
          <label htmlFor="numberOfStops" className="block text-sm font-medium text-gray-800">Number of Stops</label>
          <select
            id="numberOfStops"
            value={numberOfStops}
            onChange={handleNumberOfStopsChange}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
          >
            <option value="all">All</option>
            <option value="nonstop_flights">Nonstop Flights</option>
            <option value="maximum_one_stop">Maximum One Stop</option>
          </select>
        </div>

       
        <div>
          <label htmlFor="cabinClass" className="block text-sm font-medium text-gray-800">Cabin Class</label>
          <select
            id="cabinClass"
            value={cabinClass}
            onChange={handleCabinClassChange}
            className="w-full p-3 border border-gray-300 rounded-lg mt-1"
          >
            <option value="ECONOMY">Economy</option>
            <option value="PREMIUM_ECONOMY">Premium Economy</option>
            <option value="BUSINESS">Business</option>
            <option value="FIRST">First Class</option>
          </select>
        </div>

       
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search Flights'}
        </button>
      </form>

    
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

     
      {flightData.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <h2 className="text-3xl font-semibold text-center">Flight Results</h2>
          {flightData.map((flight, index) => {
            const origin = flight.origin; 
            const destination = flight.destination;  
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold">{origin.name} to {destination.name}</h3>
                <p><strong>Departure:</strong> {flight.departureDate} at {flight.departureAt}</p>
                <p><strong>Arrival:</strong> {destination.name} at {flight.departureAt}</p>
                <p><strong>Duration:</strong> {durationRange.min} - {durationRange.max} hours</p>

              
                <div className="mt-4">
                  <p className="text-xl text-green-600">
                    <strong>Price Range:</strong> {currency} {priceRange.min} - {currency} {priceRange.max}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {flightData.length === 0 && !loading && !error && (
        <p className="text-center mt-4">No flights found. Please try a different search.</p>
      )}
    </div>
  );
}

export default Flight;
