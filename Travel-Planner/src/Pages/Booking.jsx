import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Flight from "./Flight";
import Hotel from "./Hotel";
import Train from "./Train";
import TravelInsurance from "./TravelInsurance";
import HolidayPackage from "./HolidayPackage";
function Booking() {
   
    const [selectedService, setSelectedService] = useState("Flight");

    const renderContent = () => {
        switch (selectedService) {
            case "Flight":
                return <Flight />;
            case "Hotel":
                return <Hotel/>
            case "Holiday Package":
                return <HolidayPackage/>
            case "Train":
                return <Train/>
            case "Travel Insurance":
                return <TravelInsurance/>
            default:
                return null;
        }
    };

    return (
        <div>
            <NavBar onSelect={(service) => setSelectedService(service)} />
            
            {renderContent()}
        </div>
    );
}

export default Booking;
