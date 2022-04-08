import { format, fromUnixTime } from "date-fns";
import createWeekElemends from "./createWeekElements";
import createDiv from "./createElementsFunctions/createDiv";

export default function createWeekView(data, unitType) {
    /*
    1. Date paragraph
    2. Weather icon container
    3. Max and Min temp container
    4. Weather desc and chance of rain container
    */

    let weekendObj = {};

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const objName = new String(i).toString();
        const containerExtraClass = String.fromCharCode(97 + i);
        let formattedDate = format(fromUnixTime(element.dt), "E d");
        

        if(i === 0){
            formattedDate = 'Today';
        }
        weekendObj[objName] = {
            extraClass: containerExtraClass,
            currDay: formattedDate,
            maxTemp: Math.floor(element.temp.max),
            minTemp: Math.floor(element.temp.min),
            weatherIcon: element.weather[0].icon,
            weatherDesc: element.weather[0].main,
            chanceOfRain: `${(element.pop) * 100}`,
            container: createDiv(`dayofweek-container ${containerExtraClass}`)
        }

    }


    return createWeekElemends(weekendObj, unitType);


}