import createDiv from "./createDiv";
import { getWeatherData } from "./getWeatherData";

export async function createCountryCard() {
    // Create a country card with the required info:
    // 1. Country flag
    // 2. City
    // 3. Temperature
    // 4. What it feels like
    // 5. Weather condition
    // 6. Weather Icon 

    const searchBar = document.querySelector('#search-bar');


    const cardContainer = createDiv('card-container');

    const weatherData = (await getWeatherData('Sofia')).resolvedPromises;

    // City name, lat, lon, country code, local names:
    const cityCoord = weatherData[1];

    // // Clouds, coord, datetime, id, main{temp, feels_like, temp_min, temp_max, pressure, humidity}
    // // City name, sys{country, id, sunrise, sunset}, timezone, visibility, weather[0]{descr, icon, id, }
    // // Wind{deg, speed};
    const currentDayWeatherData = weatherData[2];

    // Array for 8 days ahead, lat, lon, timezone, timezone_offset from UTC
    const weekAheadData = weatherData[3];



    console.log(cityCoord);
    console.log(currentDayWeatherData);
    console.log(weekAheadData);



}