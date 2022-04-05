import { format, fromUnixTime } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export default function updateWeatherCard(elementsObj, weatherData) {
    const cityInfo = weatherData;
    const cityNameAndId = weatherData[2];
    const cityMainInfo = weatherData[3].current;

    const currTime = fromUnixTime(cityMainInfo.dt);
    const utcTime = utcToZonedTime(currTime, `${cityInfo[3].timezone}`);
    const formattedTime = format(utcTime, 'p');

    elementsObj.cityName.textContent = `${cityNameAndId.name},`;
    elementsObj.countryCode.textContent = cityNameAndId.sys.country;
    elementsObj.dateTime.textContent = formattedTime;
    elementsObj.weatherIcon.src = `http://openweathermap.org/img/wn/${cityMainInfo.weather[0].icon}@2x.png`;
    elementsObj.currTemp.textContent = `${Math.floor(cityMainInfo.temp)} °C`;
    elementsObj.weatherDesc.textContent = cityMainInfo.weather[0].description.toUpperCase();
    elementsObj.feelsLikeTemp.textContent = `${Math.floor(cityMainInfo.feels_like)} °C`;

    elementsObj.windSpeed.textContent = `${Math.floor(cityMainInfo.wind_speed)} km/h`;
    elementsObj.windDeg.style.transform = `rotate(${cityMainInfo.wind_deg}deg)`;
    elementsObj.humidity.textContent = `${cityMainInfo.humidity} %`;
    elementsObj.visibility.textContent = `${(cityMainInfo.visibility) / 1000} km`;
    elementsObj.pressure.textContent = `${cityMainInfo.pressure} hPa`;
    elementsObj.dewTemp.textContent = `${Math.floor(cityMainInfo.dew_point)} °C`;

}