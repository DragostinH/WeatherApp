const { format, fromUnixTime, getUnixTime, parseISO, parse } = require("date-fns");
const { getTimezoneOffset } = require("date-fns-tz");
const { changeBodyBackgroundImage } = require("./changeBodyBackground");
const { createCountryCard } = require("./createCountryCard");
const { default: getCountryFlag } = require("./getCountryFlag");
const { getWeatherData } = require("./getWeatherData");


const indexPage = (() => {
    // Finding with lattitude and longitude:
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // Finding geo location with name:
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

    // Weather forecast for 30 days:
    // https://pro.openweathermap.org/data/2.5/forecast/climate?lat={lat}&lon={lon}&appid={API key}

    // Getting ICON png
    // http://openweathermap.org/img/wn/{ICON ID}@2x.png

    // Getting FLAG icon png
    // https://countryflagsapi.com/png/{COUNTGRY CODE}

    // API Key for Openweathermap:
    // b80bfc02e42b690c3e4ed8161d1574e4

    // Create a country card with the required info:
    // 1. Country flag
    // 2. City
    // 3. Temperature
    // 4. What it feels like
    // 5. Weather condition
    // 6. Weather Icon 

    const dayOne = document.querySelector('.forecast');
    const cityP = document.querySelector('.city-p');
    const tempP = document.querySelector('.temp-p');
    const feelsLike = document.querySelector('.feels-like');
    const pressure = document.querySelector('.pressure');
    const weatherIcon = document.querySelector('.weather-icon');
    const weatherIconPNG = document.querySelector('.weather-icon-png');
    const flagElement = document.querySelector('.flag-png');
    let cityInfo;

    const myForm = document.querySelector('#my-form');
    myForm.onsubmit = 'false';
    const submitBtn = document.querySelector('.submit-btn')
    const searchBar = document.querySelector('#search-bar');

    const currentDate = format(new Date(), 'yyyy/MM/dd hh:mm');
    const parsedCurrDate = parse(currentDate, 'yyyy/MM/dd hh:mm', new Date());
    const akita = getUnixTime((parsedCurrDate));
    const timezoneOffset = getTimezoneOffset('3600');


    submitBtn.onclick = async () => {
        const input = searchBar.value;
        try {
            cityInfo = await getWeatherData(input);
            console.log(cityInfo.resolvedPromises[2]);
            console.log(cityInfo.resolvedPromises[3]);

        } catch {
            console.error('Please input a city');

        }

        console.log(format(fromUnixTime(1648641600), 'do MMM EEEE'));



        dayOne.textContent = `${cityInfo.resolvedPromises[3].daily[0].temp.day}`



        const cardContainer = document.querySelector('.card-container')
        const cityName = cityInfo.resolvedPromises[2].name;
        const temp = Math.floor(cityInfo.resolvedPromises[2].main.temp);
        const feelsLikeData = Math.floor(cityInfo.resolvedPromises[2].main.feels_like);
        const pressureData = cityInfo.resolvedPromises[2].main.pressure;
        const iconID = cityInfo.resolvedPromises[2].weather[0].icon;
        const iconPNG = `http://openweathermap.org/img/wn/${iconID}@2x.png`;
        weatherIconPNG.src = iconPNG;
        changeBodyBackgroundImage(cardContainer, cityInfo.resolvedPromises[2].weather[0].description);


        cityP.textContent = `City: ${cityName}`
        tempP.textContent = `Temp: ${temp}`
        feelsLike.textContent = `Feels like: ${feelsLikeData}`
        pressure.textContent = `Pressure: ${pressureData}`
        flagElement.src = getCountryFlag(cityInfo.resolvedPromises[2].sys.country);

    }





    // testing
    createCountryCard();


})();