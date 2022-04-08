import { changeBodyBackgroundImage } from "./changeBodyBackground";
import { getWeatherData } from "./getWeatherData";
import updateWeatherCard from "./updateWeatherCard";
import createWeekView from "./createWeekView";
import removeAllChildNodes from "./removeAllChildNodes";
import appendWeekViewElements from "./appendWeekViewElements";
import './style.css';
import './img/icons/information-icon.png';
import './img/icons/rain-drop-icon.png';
import './img/icons/wind-icon.svg';
import checkUnitType from './checkUnitType';


const indexPage = (async () => {

    // Page search field:
    const searchBar = document.querySelector('#search-bar');

    // Search submit btn:
    const submitBtn = document.querySelector('.submit-btn')

    // Main weather container 
    const weatherSection = document.querySelector('.weather-section');
    weatherSection.style.display = "none";

    // Week ahead container
    const weekAheadSection = document.querySelector('.weekahead-view-container');
    weekAheadSection.style.display = "none";

    // Switch btn
    const unitSwitchBtn = document.querySelector('.switch-button-checkbox');


    const elementsObj = {
        cityName: document.querySelector('.city-p'),
        countryCode: document.querySelector('.country-code'),
        dateTime: document.querySelector('.current-datetime'),
        weatherIcon: document.querySelector('.weather-icon'),
        currTemp: document.querySelector('.curr-temp'),
        weatherDesc: document.querySelector('.weather-description'),
        feelsLikeText: document.querySelector('.feels-like-text'),
        feelsLikeTemp: document.querySelector('.feels-like-temp'),
        windSpeed: document.querySelector('.wind-reading'),
        windDeg: document.querySelector('.wind-icon'),
        humidity: document.querySelector('.humidity-reading'),
        visibility: document.querySelector('.visibility-reading'),
        pressure: document.querySelector('.pressure-reading'),
        dewTemp: document.querySelector('.dew-degrees')
    }

    // City information from fetch request:
    let cityInfo;
    
    unitSwitchBtn.addEventListener('click', async () => {
        // let input = searchBar.value.trim();
        let input = elementsObj.cityName.textContent;

        const unitType = checkUnitType(unitSwitchBtn);
        cityInfo = (await getWeatherData(input, unitType)).resolvedPromises;
        const weekAheadInfo = createWeekView(cityInfo[3].daily, unitType);
        updateWeatherCard(elementsObj, cityInfo, unitType);
        removeAllChildNodes(weekAheadSection);
        appendWeekViewElements(weekAheadInfo, weekAheadSection);
        changeBodyBackgroundImage(weatherSection,
            cityInfo[2].name,
            cityInfo[3].current.weather[0].description);

    });



    submitBtn.addEventListener('click', (async () => {
        weatherSection.style.display = "block";
        weekAheadSection.style.display = "flex";
        const input = searchBar.value.trim();
        const unitType = checkUnitType(unitSwitchBtn);

        if (input === '') {
            console.error('Please input a city');
        } else {
            try {
                cityInfo = (await getWeatherData(input, unitType)).resolvedPromises;
                updateWeatherCard(elementsObj, cityInfo, unitType);
                const weekView = createWeekView(cityInfo[3].daily, unitType);
                changeBodyBackgroundImage(weatherSection,
                    cityInfo[2].name,
                    cityInfo[3].current.weather[0].description);
                removeAllChildNodes(weekAheadSection);
                appendWeekViewElements(weekView, weekAheadSection);

            } catch {
                console.error('Something went wrong with getting the weather data.');

            }
        }

    }));














})();