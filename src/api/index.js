import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fethData = async (country) => {

    let changed = url;

    if(country) {
        changed = `${url}/countries/${country}`
    }


    const {data : { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changed); 
    return { confirmed, recovered, deaths, lastUpdate };
}


export const fetchDailyDate = async () => {


    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dialyData) => ({
        confirmed: dialyData.confirmed.total,
        deaths: dialyData.deaths.total,
        date: dialyData.reportDate

    }));

    return modifiedData;
}

export const fetchCountries = async () => {

    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
    
}
