export default function widenDiv(element) {

    element.addEventListener('click', () => {

        const mainArr = Array.from(document.getElementsByClassName('dayofweek-container'));
        const tempContArr = Array.from(document.getElementsByClassName('weather-desc-cont'));
 
        mainArr.forEach((e) => {
            e.style.width = "fit-content";
        })
        tempContArr.forEach((el) => {
            el.style.display = "none";
        });




        element.style.width = "336px";
        element.childNodes[1].childNodes[1].style.display = "block";
    })
}