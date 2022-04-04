const { format, fromUnixTime, getUnixTime, parseISO, parse } = require("date-fns");
const { getTimezoneOffset, utcToZonedTime } = require("date-fns-tz");
const { changeBodyBackgroundImage } = require("./changeBodyBackground");
const { getCountryObj } = require("./getCountryObj");
const { default: getCountryFlag } = require("./getCountryFlag");
const { getWeatherData } = require("./getWeatherData");


const indexPage = (() => {
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

    // Create a country card with the required info:
    // 1. Country flag
    // 2. City
    // 3. Temperature
    // 4. What it feels like
    // 5. Weather condition
    // 6. Weather Icon 



    let cityNameAndId;
    let cityMainInfo;

    // Page search field:
    const searchBar = document.querySelector('#search-bar');
    // Search submit btn:
    const submitBtn = document.querySelector('.submit-btn')

    // Card background
    const cardContainer = document.querySelector('.card-container');
    // City name
    const cityName = document.querySelector('.city-p');
    // Country code span
    const countryCode = document.querySelector('.country-code');
    // Date time paragraph
    const dateTime = document.querySelector('.current-datetime');
    // Weather icon
    const weatherIcon = document.querySelector('.weather-icon');
    // Current temperature
    const currTemp = document.querySelector('.curr-temp');
    // Weather description
    const weatherDesc = document.querySelector('.weather-description');
    // Feels like text:
    const feelsLikeText = document.querySelector('.feels-like-text');
    // feels like temp:
    const feelsLikeTemp = document.querySelector('.feels-like-temp');

    // Weather MAIN
    // Wind reading
    const windSpeed = document.querySelector('.wind-reading');
    // Wind direction
    const windDeg = document.querySelector('.wind-icon');
    // Humidity reading
    const humidityReading = document.querySelector('.humidity-reading');
    // Visibility reading
    const visibilityReading = document.querySelector('.visibility-reading');
    // Pressure reading:
    const pressureReading = document.querySelector('.pressure-reading');
    // Dew temperature
    const dewTemp = document.querySelector('.dew-degrees');




    // Time format:
    // const currentDate = format(new Date(), 'yyyy/MM/dd hh:mm');
    // const parsedCurrDate = parse(currentDate, 'yyyy/MM/dd hh:mm', new Date());
    // const akita = getUnixTime((parsedCurrDate));
    // const timezoneOffset = getTimezoneOffset('3600');


    submitBtn.onclick = async () => {
        const input = searchBar.value.trim();
        if (input === '') {
            console.error('Please input a city');
        } else {

            try {
                cityNameAndId = (await (await getWeatherData(input)).resolvedPromises[2])
                cityMainInfo = (await getWeatherData(input)).resolvedPromises[3].current;

            } catch {
                console.error('Please input a city');

            }
        }


        console.log(cityNameAndId);
        console.log(cityMainInfo);
        // console.log(windDeg);

        changeBodyBackgroundImage(cardContainer, cityMainInfo.weather[0].description);

        const currTime = fromUnixTime(cityMainInfo.dt);
        const utcTime = utcToZonedTime(currTime, "Europe/London");
        const formattedTime = format(utcTime, 'p');
        // const parsedCurTime = parse(formattedTime, 'hh:mm', new Date());


        cityName.textContent = `${cityNameAndId.name},`;
        countryCode.textContent = cityNameAndId.sys.country;
        dateTime.textContent = formattedTime;
        weatherIcon.src = `http://openweathermap.org/img/wn/${cityMainInfo.weather[0].icon}@2x.png`;
        currTemp.textContent = `${Math.floor(cityMainInfo.temp)} °C`;
        weatherDesc.textContent = cityMainInfo.weather[0].description.toUpperCase();
        feelsLikeTemp.textContent = `${Math.floor(cityMainInfo.feels_like)} °C`;

        windSpeed.textContent = `${Math.floor(cityMainInfo.wind_speed)} km/h`;
        windDeg.style.transform =`rotate(${cityMainInfo.wind_deg}deg)`;
        humidityReading.textContent = `${cityMainInfo.humidity} %`;
        visibilityReading.textContent = `${(cityMainInfo.visibility) / 1000} km`;
        pressureReading.textContent = `${cityMainInfo.pressure} hPa`;
        dewTemp.textContent = `${Math.floor(cityMainInfo.dew_point)} °C`;




    }




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