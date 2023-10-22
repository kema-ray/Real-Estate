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


    // return all properties
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });
        // remove duplicates
        const uniqueProperties = ['Location (any)', ...
        new Set(allProperties)];

        // set properties state
        setProperties(uniqueProperties);
    }, []);

    const handleClick = () => {
        setLoading(true);
        // console.log(city, property, price);
        const isDefault = (str) => {
            return str.split(' ').includes('(any)')
        };

        const minPrice = parseInt(price.split(' ')[0]);

        const maxPrice = parseInt(price.split(' ')[2]);
        
        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            if (
                house.city === city &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ){
                return house;
            }

            // if all values are default
            if (isDefault(city) && isDefault(property) && isDefault(price)) {
                return house;
            }

            // if country in not default
            if (!isDefault(city) && isDefault(property) && isDefault(price)) {
                return house.city === city;
            }

            // if property is not default
            if (!isDefault(property) && isDefault(city) && isDefault(price)) {
                return house.type === property;
            }

            // if price is not default
            if (!isDefault(price) && isDefault(property) && isDefault(city)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house;
                }
            }

            // if city and propert is not default
            if (!isDefault(city) && !isDefault(property) && isDefault(price)) {
                return house.city === city && house.type === property;
            }

            // if country and price is not default
            if (!isDefault(city) && isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.city === city;
                }
            }

            // if property and price is not default
            if (isDefault(city) && !isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type === property;
                }
            }
        });

        setTimeout(() => {
            return (
                newHouses.length < 1 ? setHouses([]) : 
                setHouses(newHouses),
                setLoading(false)
            );
        }, 1000);
    };

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
            loading,
            handleClick,
        }}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContextProvider;