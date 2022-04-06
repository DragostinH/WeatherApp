export default function appendWeekViewElements(obj, mainElement) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            mainElement.appendChild(element);

        }
    }
}