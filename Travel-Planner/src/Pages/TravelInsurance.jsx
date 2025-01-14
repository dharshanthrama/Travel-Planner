import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TravelInsurance() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const handleRedirect = () => {
    window.location.href = "https://travel.policybazaar.com/?newpq=1&utm_term=newjourney&utm_content=newpq"; 
  };

  const toggleSection = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-900 text-white p-6 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4">ExploreEase Travel Insurance</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Your Adventure, Secured! Enjoy your travels with peace of mind, knowing ExploreEase has you covered. 
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-900 rounded-lg shadow-lg p-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Why Choose Travel Insurance?</h2>
        <p className="text-lg mb-4">
          Traveling is an adventure, but it can come with uncertainties. Travel insurance ensures you're financially 
          secure in case of cancellations, medical emergencies, or lost baggage. Here's why you need it:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Comprehensive protection for your trip.</li>
          <li>Emergency medical coverage.</li>
          <li>Trip cancellations and interruptions.</li>
          <li>Lost or delayed baggage compensation.</li>
          <li>24/7 worldwide support.</li>
        </ul>

        {/* Expandable Sections */}
        <div className="space-y-6">
          <div>
            <button
              onClick={() => toggleSection(1)}
              className="w-full text-left text-xl font-semibold bg-gray-100 p-4 rounded-md hover:bg-gray-200">
              🌍 What is Travel Insurance? {expanded === 1 ? '-' : '+'}
            </button>
            {expanded === 1 && (
              <div className="bg-gray-50 p-4 mt-2 rounded-md text-gray-700">
                <p className="mb-4">
                  Travel insurance provides financial protection against unexpected events during your journey, 
                  such as cancellations, medical emergencies, or lost luggage. 
                </p>
                <p>
                  It’s your safety net, ensuring you enjoy your travels without worrying about unforeseen expenses.
                </p>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection(2)}
              className="w-full text-left text-xl font-semibold bg-gray-100 p-4 rounded-md hover:bg-gray-200">
              ✈️ How Does Travel Insurance Work? {expanded === 2 ? '-' : '+'}
            </button>
            {expanded === 2 && (
              <div className="bg-gray-50 p-4 mt-2 rounded-md text-gray-700">
                <p>Here’s a step-by-step process:</p>
                <ol className="list-decimal list-inside pl-4 mt-2 space-y-2">
                  <li>Select a plan that matches your travel needs.</li>
                  <li>Purchase the policy before your trip begins.</li>
                  <li>In case of an incident, file a claim with supporting documents.</li>
                  <li>The insurance provider reviews and processes your claim.</li>
                  <li>You receive reimbursement for eligible expenses.</li>
                </ol>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection(3)}
              className="w-full text-left text-xl font-semibold bg-gray-100 p-4 rounded-md hover:bg-gray-200">
              🛡️ Why Should I Buy Travel Insurance? {expanded === 3 ? '-' : '+'}
            </button>
            {expanded === 3 && (
              <div className="bg-gray-50 p-4 mt-2 rounded-md text-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  <li>Unforeseen emergencies like illness or accidents.</li>
                  <li>Flight delays or cancellations that disrupt your plans.</li>
                  <li>Protection for personal belongings in case of theft or loss.</li>
                  <li>Peace of mind knowing you’re financially secure.</li>
                  <li>Some destinations require insurance as part of entry requirements.</li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleSection(4)}
              className="w-full text-left text-xl font-semibold bg-gray-100 p-4 rounded-md hover:bg-gray-200">
              ❓ Frequently Asked Questions {expanded === 4 ? '-' : '+'}
            </button>
            {expanded === 4 && (
              <div className="bg-gray-50 p-4 mt-2 rounded-md text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold">Q: What does travel insurance cover?</h3>
                  <p>A: Coverage includes medical emergencies, trip cancellations, lost luggage, flight delays, and more. Review your policy for details.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: When should I buy travel insurance?</h3>
                  <p>A: It’s best to purchase travel insurance as soon as you book your trip to ensure maximum coverage for unforeseen events.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: Can I buy travel insurance for international trips?</h3>
                  <p>A: Yes, travel insurance covers both domestic and international trips.</p>
                </div>
                <div>
                  <h3 className="font-semibold">Q: Can I customize my coverage?</h3>
                  <p>A: Absolutely! Many providers offer customizable plans to suit your specific travel needs.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-12">
        <button
          onClick={handleRedirect}
          className="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
          🌟 Explore Our Main Insurance Plans
        </button>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-sm text-gray-300">
        <p>© 2024 ExploreEase. Your journey, our protection.</p>
      </div>
    </div>
  );
}

export default TravelInsurance;
