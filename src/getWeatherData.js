export async function getWeatherData(city, units = 'imperial') {
    const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=${'imperial'}&limit=1&appid=b80bfc02e42b690c3e4ed8161d1574e4`);

    const obj = await geo.json();

    const coordinates = {
        lat: obj[0].lat,
        lon: obj[0].lon
    }

    const cityInfo = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${units}&appid=b80bfc02e42b690c3e4ed8161d1574e4`)
        .then(res => res.json());

    const oneWeatherCall = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=${units}&exclude=minutely,hourly&appid=b80bfc02e42b690c3e4ed8161d1574e4`)
        .then(r => r.json());

    const resolvedPromises = await Promise.all([geo, obj, cityInfo, oneWeatherCall]);
    


    return {resolvedPromises};
}