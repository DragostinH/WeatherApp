const { format, fromUnixTime, getUnixTime, parseISO, parse } = require("date-fns");
const { getTimezoneOffset, utcToZonedTime } = require("date-fns-tz");
const { changeBodyBackgroundImage } = require("./changeBodyBackground");
const { getCountryObj } = require("./getCountryObj");
const { default: getCountryFlag } = require("./getCountryFlag");
const { getWeatherData } = require("./getWeatherData");
const { default: updateWeatherCard } = require("./updateWeatherCard");
const { default: createWeekView } = require("./createWeekView");
const { default: removeAllChildNodes } = require("./removeAllChildNodes");
const { default: appendWeekViewElements } = require("./appendWeekViewElements");
import './style.css';
import './img/icons/information-icon.png';
import './img/icons/rain-drop-icon.png';
import './img/icons/wind-icon.svg';


const indexPage = (async () => {
    // Finding with lattitude and longitude:
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // Finding geo location with name:
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

    // Weather forecast for 30 days:
    // https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}

    // Getting weather ICON png
    // http://openweathermap.org/img/wn/{ICON ID}@2x.png

    // Getting FLAG icon png
    // https://countryflagsapi.com/png/{COUNTGRY CODE}

    // API Key for Openweathermap:
    // b80bfc02e42b690c3e4ed8161d1574e4 

    // Page search field:
    const searchBar = document.querySelector('#search-bar');

    // Search submit btn:
    const submitBtn = document.querySelector('.submit-btn')

    // Main weather container 
    const weatherSection = document.querySelector('.weather-section');

    // Week ahead container
    const weekAheadSection = document.querySelector('.weekahead-view-container');

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

    let cityInfo = (await getWeatherData('London')).resolvedPromises;
    const weekAheadInfo = createWeekView(cityInfo[3].daily);
    appendWeekViewElements(weekAheadInfo, weekAheadSection);

    updateWeatherCard(elementsObj, cityInfo);
    changeBodyBackgroundImage(weatherSection,
        cityInfo[2].name,
        cityInfo[3].current.weather[0].description);


    submitBtn.addEventListener('click', (async () => {
        const input = searchBar.value.trim();
        if (input === '') {
            console.error('Please input a city');
        } else {
            try {
                cityInfo = (await getWeatherData(input)).resolvedPromises;
                updateWeatherCard(elementsObj,
                    cityInfo);
                const weekView = createWeekView(cityInfo[3].daily);
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




    // testing -------------------------------
    // console.log(getWeatherData('Sofia'));
    // console.log(getCountryObj('Sofia'));

    // op: TA2
    // z(zoom lvl)
    // x: x tile coordinate
    // y: y tile coordinate

    // lat: 42.6978634
    // lon: 23.3221789
    // API key: b80bfc02e42b690c3e4ed8161d1574e4

    // Weather map URL template:
    // https://maps.openweathermap.org/maps/2.0/weather/1h/{op}/{z}/{x}/{y}?appid={API key}

    // Weather map URL tester:
    // https://maps.openweathermap.org/maps/2.0/weather/1h/TA2/1/1/1?appid=b80bfc02e42b690c3e4ed8161d1574e4










})();