import { Button } from '@/Components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';
function HotelDetails({ hotel, isOpen, onClose }) {
  if (!hotel || !isOpen) return null;

  // Function to format the price without decimals
  const formatPrice = (price) => {
    return price ? Math.floor(price) : 'N/A'; // Remove decimals
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-1/3 shadow-lg rounded-md bg-white"> {/* Adjusted width to 1/3 */}
        <div className="absolute top-2 right-2 text-lg">
          <button
            onClick={onClose}
            className="text-red-500 hover:bg-red-500 hover:text-gray-700 bg-white"
          >
            ×
          </button>
        </div>
        <div className="text-center mr-5">
          <h3 className="text-lg font-medium text-gray-900">{hotel.name}</h3>
        </div>
        <div className="mt-2 space-y-4 px-7 py-3">
          <img
            src={hotel.photoUrls && hotel.photoUrls[0] ? hotel.photoUrls[0] : 'https://via.placeholder.com/300'}
            alt={hotel.name}
            className="rounded h-64 w-full object-cover"
          />
          <p className="text-sm text-gray-500">
            <strong>Review Score:</strong> {hotel.reviewScore} ({hotel.reviewScoreWord})
          </p>
          <p className="text-sm text-gray-500">
            <strong>Price:</strong> {hotel.priceBreakdown?.grossPrice?.currency} {formatPrice(hotel.priceBreakdown?.grossPrice?.value)}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Check-in:</strong> {hotel.checkinDate} ({hotel.checkin?.fromTime} - {hotel.checkin?.untilTime})
          </p>
          <p className="text-sm text-gray-500">
            <strong>Check-out:</strong> {hotel.checkoutDate} ({hotel.checkout?.fromTime} - {hotel.checkout?.untilTime})
          </p>
          <p className="text-sm text-gray-500">
            <strong>Location:</strong> Latitude: {hotel.latitude}, Longitude: {hotel.longitude}
          </p>
        </div>
        <div className="mt-4 text-center justify-center p-1 flex gap-5">
          <Button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            Close
          </Button>
          <Link to={"/make-payment"}>
          <Button>Payment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
