import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Button } from './ui/button'; // Ensure correct path to the Button component

function Hero() {
  return (
    <div className='flex flex-col items-center mx-12 md:mx-56 gap-4 md:gap-6'>
      {/* Welcome Heading */}
      {/* <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800 md:text-[50px] mt-4 md:mt-10 mb-0'>
        Welcome to <span className="text-[#9f2a00]">ExploreEase</span>
      </h1> */}

      {/* Tagline */}
      <h2 className='font-Merriweather font-extrabold text-[32px] md:text-[40px] text-center mt-4 md:mt-10'>
        <span className="text-[#7c1f91]">The World is Yours to Explore. </span>
        Start Your Next Adventure Here!
      </h2>

      {/* Description */}
      <p className='text-lg md:text-xl text-gray-600 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* Call to Action */}
      <Link to={'/create-trip'}>
        <Button className="mt-4 md:mt-6">
          Get Started
        </Button>
      </Link>
    </div>
  );
}

export default Hero;
