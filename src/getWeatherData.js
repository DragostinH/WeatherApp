export async function getWeatherData(city, units) {


    // Finding with lattitude and longitude:
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // Finding geo location with name:
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}

    // Weather forecast for 7 days:
    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    // Getting ICON png
    // http://openweathermap.org/img/wn/{ICON ID}@2x.png

    // Getting FLAG icon png
    // https://countryflagsapi.com/png/{COUNTGRY CODE}

    const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=metric&limit=1&appid=b80bfc02e42b690c3e4ed8161d1574e4`);
    const obj = await geo.json();

    const coordinates = {
        lat: obj[0].lat,
        lon: obj[0].lon
    }

    const cityInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=b80bfc02e42b690c3e4ed8161d1574e4`)
        .then(res => res.json());

    const oneWeatherCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&exclude=minutely,hourly&appid=b80bfc02e42b690c3e4ed8161d1574e4`)
        .then(r => r.json());

    const resolvedPromises = await Promise.all([geo, obj, cityInfo, oneWeatherCall]);

    return {resolvedPromises};
}