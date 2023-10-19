import React, { createContext, useState} from 'react';

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