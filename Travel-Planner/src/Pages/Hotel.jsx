import React, { useState } from 'react';
import axios from 'axios';
import HotelDetails from './HotelDetails';

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [location, setLocation] = useState('Berlin, Berlin Federal State, Germany');
  const [checkinDate, setCheckinDate] = useState('2025-01-30');
  const [checkoutDate, setCheckoutDate] = useState('2025-02-02');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const fetchHotels = async () => {
    const options = {
      method: 'GET',
      url: 'https://booking-data.p.rapidapi.com/booking-app/search/by-location',
      params: {
        location,
        checkin_date: checkinDate,
        checkout_date: checkoutDate,
        adults,
        children_age: Array.from({ length: children }, (_, i) => i).join(','),
        rooms,
        units: 'metric',
        temperature_unit: 'c',
      },
      headers: {
        'x-rapidapi-key': 'f38a20899fmsh15ebb5c8a3e2febp15d77fjsn570d23ff34ad',
        'x-rapidapi-host': 'booking-data.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setHotels(response.data.data || []);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching hotel data:', error);
    }
  };

  const handleViewDetails = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const formatPrice = (price) => {
    if (price) {
      return Math.floor(price); // Removes decimals
    }
    return 'N/A'; // Return a default value if no price is provided
  };

  return (
    <div className="pl-36 pr-24 py-8 bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Hotel Search</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
        <div className="w-full md:w-1/4">
          <label htmlFor="location" className="block mb-2 font-semibold text-gray-700">Location</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border p-3 rounded w-full shadow-md"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Check-in Date</label>
          <input
            id="checkin"
            type="date"
            value={checkinDate}
            onChange={(e) => setCheckinDate(e.target.value)}
            className="border p-3 rounded shadow-md"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Check-out Date</label>
          <input
            id="checkout"
            type="date"
            value={checkoutDate}
            onChange={(e) => setCheckoutDate(e.target.value)}
            className="border p-3 rounded shadow-md"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Adults</label>
          <input
            id="adults"
            type="number"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            placeholder="Number of adults"
            className="border p-3 rounded shadow-md w-20"
            min="1"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Children</label>
          <input
            id="children"
            type="number"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            placeholder="Number of children"
            className="border p-3 rounded shadow-md w-20"
            min="0"
            max="10"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Rooms</label>
          <input
            id="rooms"
            type="number"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            placeholder="Number of rooms"
            className="border p-3 rounded shadow-md w-20"
            min="1"
          />
        </div>
        <button
          onClick={fetchHotels}
          className="bg-blue-600 text-white px-5 py-3 rounded shadow-md hover:bg-blue-700 transition-all">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="border rounded-lg shadow-lg p-3 flex flex-col bg-white w-64">
            <img
              src={hotel.photoUrls && hotel.photoUrls[0] ? hotel.photoUrls[0] : 'https://via.placeholder.com/300'}
              alt={hotel.name}
              className="rounded-lg h-64 w-full object-cover mb-2"
            />
            <h2 className="font-bold text-lg mb-2 text-gray-800">{hotel.name}</h2>
            <p className="text-gray-600 mb-2">Review Score: {hotel.reviewScore} ({hotel.reviewScoreWord})</p>
            <p className="text-gray-600 mb-4 font-semibold">Price: {hotel.priceBreakdown?.grossPrice?.currency} {formatPrice(hotel.priceBreakdown?.grossPrice?.value)}</p>
            <button
              onClick={() => handleViewDetails(hotel)}
              className="mt-auto bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedHotel && isModalOpen && (
        <HotelDetails 
          hotel={selectedHotel} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default Hotel;
