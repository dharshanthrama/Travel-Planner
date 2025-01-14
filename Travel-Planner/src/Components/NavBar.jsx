import React, { useState } from "react";

function NavBar({ onSelect }) {
    const [selected, setSelected] = useState("");

    const handleSelect = (item) => {
        setSelected(item);
        onSelect(item);
    };

    const images = {
        Flight: {
            normal: "/Flight.png",
            selected: "/Flight2.png", // Replace with the actual selected state image path
        },
        Hotel: {
            normal: "/Hotel.png",
            selected: "/Hotel2.png", // Replace with the actual selected state image path
        },
        "Holiday Packages": {
            normal: "/Holiday.png",
            selected: "/Holiday2.png", // Replace with the actual selected state image path
        },
        Train: {
            normal: "/Train.png",
            selected: "/Train2.png", // Replace with the actual selected state image path
        },
        "Travel Insurance": {
            normal: "/Travel.png",
            selected: "/Travel2.png", // Replace with the actual selected state image path
        },
    };

    return (
        <div className="flex justify-around bg-white p-4 shadow-md rounded-lg">
            {Object.keys(images).map((item) => (
                <div
                    key={item}
                    className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => handleSelect(item)}
                >
                    <img
                        src={selected === item ? images[item].selected : images[item].normal}
                        alt={item}
                        style={{
                            height: "48px",
                            width: "48px",
                        }}
                    />
                    <span
                        className={`text-sm mt-2 ${
                            selected === item ? "text-blue-600 font-semibold" : "text-gray-600"
                        }`}
                    >
                        {item}
                    </span>
                    {selected === item && <div className="w-full h-1 bg-blue-600 mt-1"></div>}
                </div>
            ))}
        </div>
    );
}

export default NavBar;
