import { fromUnixTime, getUnixTime } from "date-fns";
import createDiv from "./createDiv";
import getCountryFlag from "./getCountryFlag";
import { getWeatherData } from "./getWeatherData";

export async function createCountryCard() {
    // Create a country card with the required info:
    // 1. Country flag
    // 2. City
    // 3. Temperature
    // 4. What it feels like
    // 5. Weather condition
    // 6. Weather Icon 
    // 7. Date time

    const main = document.querySelector('main');
    const searchBar = document.querySelector('#search-bar');


    const cardContainer = createDiv('card-container');


    const weatherData = (await getWeatherData('Sofia')).resolvedPromises;

    // City name, lat, lon, country code, local names:
    const cityCoord = weatherData[1];

    // // Clouds, coord, datetime, id, main{temp, feels_like, temp_min, temp_max, pressure, humidity}
    // // City name, sys{country, id, sunrise, sunset}, timezone, visibility, weather[0]{descr, icon, id, }
    // // Wind{deg, speed};
    const currDayWeatherData = weatherData[2];

    // Array for 8 days ahead, lat, lon, timezone, timezone_offset from UTC
    const weekAheadData = weatherData[3];


    // Country flag:
    const countryFlag = getCountryFlag(currDayWeatherData.sys.country);

    // City name
    const cityName = currDayWeatherData.name;

    // Current day temp
    const currentTemp = Math.floor(currDayWeatherData.main.temp);

    // Current day temp feels_like:
    const currDayFeelsLike = Math.floor(currDayWeatherData.main.feels_like);

    // Current day humidity:
    const currDayHumidity = currDayWeatherData.main.humidity;

    // Current day pressure:
    const currDayPressure = currDayWeatherData.main.pressure;

    // Current day tempMax:
    const currDayTempMax = Math.floor(currDayWeatherData.main.temp_max);

    // Current day tempMin:
    const currDayTempMin = Math.floor(currDayWeatherData.main.temp_min);

    // Current day weatherDesc:
    const currDayWeatherDesc = currDayWeatherData.weather[0].description;

    // Current day weather icon ID:
    const currDayWeatherIconID = currDayWeatherData.weather[0].icon;

    //Curr day Date time
    const currDayDt = fromUnixTime(currDayWeatherData.dt);

    // Curr day visibility
    const currDayVisibility = currDayWeatherData.visibility;

    // Curr day wind deg
    const currDayWindDeg = currDayWeatherData.wind.deg;

    // Curr day wind speed
    const currDayWindSpeed = currDayWeatherData.wind.speed;








    // console logs
    console.log(cityCoord);
    console.log(currDayWeatherData);
    console.log(weekAheadData);



}