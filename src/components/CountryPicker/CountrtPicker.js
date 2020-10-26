import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handelCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }


        fetchAPI();
    }, [setFetchedCountries])




    return (
        <div>
            <select className='option' onChange={(e) => handelCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </select>
        </div>
    );
}
 
export default CountryPicker;


// 