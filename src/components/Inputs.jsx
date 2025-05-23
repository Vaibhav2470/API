import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';   


function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city) {
            setQuery({ q: city });
            setCity("");
        }
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setQuery({
                    lat: latitude,
                    lon: longitude,
                });
            });
        }
    };

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) {
            setUnits(selectedUnit);
        }
    };
return (
    <div className="Flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input
                value={city}
                onChange={(e) =>  setCity(e.currentTarget.value)}
                type="text"
                placeholder="Search for city...."
                className="text-xl font-light p-2 w-full shadow-x1 focus:outline-none capitalize placeholder: lowercase"
                />
                <UilSearch
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125" 
                onClick={handleSearchClick}
                />
                <UilLocationPoint
                size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleLocationClick}
            />
        </div>      
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button
                name="metric"
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick= {handleUnitsChange}
                >
                °C
            </button>
            <p className="text-xl text-white mx-1"></p>
            <button
                name="imperial"
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick= {handleUnitsChange}
                >
                °F
            </button>
        </div>
    </div>
);
}
export default Inputs;