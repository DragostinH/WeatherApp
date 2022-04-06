import createDiv from "./createElementsFunctions/createDiv";
import createImg from "./createElementsFunctions/createImg";
import createParagraph from "./createElementsFunctions/createParagraph.js";
import widenDiv from "./widenDiv";

export default function createWeekElemends(obj) {
    let weekElementsObj = {};


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
        // Info updates
        datePara.textContent = element.currDay;
        weatherIcon.src = `http://openweathermap.org/img/wn/${element.weatherIcon}@2x.png`;
        maxTemp.textContent = `${element.maxTemp}°C`;
        minTemp.textContent = `${element.minTemp}°C`;
        weatherMainDesc.textContent = element.weatherDesc;
        rainIcon.src = "../src/img/icons/rain-drop-icon.png";
        rainText.textContent = `${element.chanceOfRain}`
        // APPENDS----------------
        tempContainer.appendChild(leftSide);
        tempContainer.appendChild(weatherDescCont);
        leftSide.appendChild(weatherIcon);
        leftSide.appendChild(minMaxTempContainer);
        minMaxTempContainer.appendChild(maxTemp);
        minMaxTempContainer.appendChild(minTemp);
        weatherDescCont.appendChild(weatherMainDesc);
        weatherDescCont.appendChild(rainText);
        rainText.appendChild(rainIcon);

        mainContainer.appendChild(datePara);
        mainContainer.appendChild(tempContainer);

        widenDiv(mainContainer);
        weekElementsObj[key] = mainContainer;
    }


    return weekElementsObj;

}