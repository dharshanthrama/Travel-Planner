import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions } from "@/constants/options";
import { SelectTraveleslist } from "@/constants/options";
import { Button } from "@/components/ui/button"; 

function CreateTrip() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.length > 2) {
      try {
        const response = await axios.get(
          `https://us1.locationiq.com/v1/autocomplete.php?key=pk.a9a5b2de807db893652c10198b44cf62&q=${e.target.value}&format=json`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    } else {
      setResults([]); 
    }
  };

  const handleSelectLocation = (location) => {
    setQuery(location.display_name); 
    setResults([]); 
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-30 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      
      <div className="mt-20 flex flex-col gap-10">
        <label htmlFor="destination" className="text-xl my-3 font-medium block">
          What is your destination of choice?
        </label>
        <input
          id="destination"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <ul className="mt-3 bg-white border border-gray-300 rounded shadow">
          {results.length > 0 ? (
            results.map((result) => (
              <li
                key={result.place_id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectLocation(result)}
              >
                {result.display_name}
              </li>
            ))
          ) : query.length > 2 ? (
            <li className="p-2 text-gray-500">No results found</li>
          ) : null}
        </ul>
      </div>

     
      <div className="mt-10">
        <label htmlFor="trip-days" className="text-xl my-3 font-medium block">
          How many days is your trip?
        </label>
        <Input id="trip-days" placeholder="Ex. 3" type="number" />
      </div>

     
      <div>
        <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div key={index}
            className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
           >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure??</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTraveleslist.map((item, index) => (
            <div key={index}
            className="p-4 border cursor-pointer rounded-lg hover:shadow-lg"
           >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button>Genrate Trip</Button>
      </div>


    </div>
  );
}

export default CreateTrip;
