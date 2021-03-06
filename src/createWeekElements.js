import createDiv from "./createElementsFunctions/createDiv";
import createImg from "./createElementsFunctions/createImg";
import createParagraph from "./createElementsFunctions/createParagraph.js";
import widenDiv from "./widenDiv";

export default function createWeekElemends(obj, unitType = 'metric') {
    let weekElementsObj = {};
    let unit = (unitType === 'metric') ? '°C' : '°F';


    for (const key in obj) {
        const element = obj[key];
        console.log(element);
        const mainContainer = element.container;

        const datePara = createParagraph(`date-para ${key}`);
        const tempContainer = createDiv(`temp-container ${key}`);
        const leftSide = createDiv(`left-side ${key}`);
        const weatherIcon = createImg(`weekday-weather-icon ${key}`);
        const minMaxTempContainer = createDiv(`min-max-temp-cont ${key}`);
        const maxTemp = createParagraph(`max-temp ${key}`);
        const minTemp = createParagraph(`min-temp ${key}`);
        const weatherDescCont = createDiv(`weather-desc-cont ${element.extraClass}`);
        const weatherMainDesc = createParagraph(`weather-main-desc ${key}`);
        const rainText = createParagraph(`rain-text ${key}`);
        const rainIcon = createImg(`rain-icon ${key}`);
        const rainCont = createDiv('rain-cont');
        // Info updates
        datePara.textContent = element.currDay;
        weatherIcon.src = `http://openweathermap.org/img/wn/${element.weatherIcon}@2x.png`;
        maxTemp.textContent = `${element.maxTemp}${unit}`;
        minTemp.textContent = `${element.minTemp}${unit}`;
        weatherMainDesc.textContent = element.weatherDesc;
        rainIcon.src = "../src/img/icons/rain-drop-icon.png";
        rainText.textContent = `${element.chanceOfRain}%`
        // APPENDS----------------
        tempContainer.appendChild(leftSide);
        tempContainer.appendChild(weatherDescCont);
        leftSide.appendChild(weatherIcon);
        leftSide.appendChild(minMaxTempContainer);
        minMaxTempContainer.appendChild(maxTemp);
        minMaxTempContainer.appendChild(minTemp);
        weatherDescCont.appendChild(weatherMainDesc);
        weatherDescCont.appendChild(rainCont);
        rainCont.appendChild(rainText);
        rainCont.appendChild(rainIcon);

        mainContainer.appendChild(datePara);
        mainContainer.appendChild(tempContainer);

        widenDiv(mainContainer);
        weekElementsObj[key] = mainContainer;
    }


    return weekElementsObj;

}