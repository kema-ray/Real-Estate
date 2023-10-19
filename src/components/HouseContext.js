import React, { createContext, useEffect, useState} from 'react';

import {housesData} from '../data';

export const HouseContext = createContext();


const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [city, setCity] = useState('Location (any)');
    const [cities, setCities] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const allCities = houses.map((house) => {
            return house.city;
        });
        // remove duplicates
        const uniqueCities = ['Location (any)', ...
        new Set(allCities)];

        // set cities
        setCities(uniqueCities);
    }, []);

    return (
        <HouseContext.Provider value={{
            city,
            setCity,
            cities,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            houses,
            loading
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider;