const indexPage = (() => {
    // Finding with lattitude and longitude:
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    // Finding geo location with name:
    // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}


    const myForm = document.querySelector('#my-form');
    myForm.onsubmit = 'false';
    const submitBtn = document.querySelector('.submit-btn')
    const searchBar = document.querySelector('#search-bar');


    submitBtn.onclick = async () => {
        const cityP = document.querySelector('.city-p');
        const tempP = document.querySelector('.temp-p');
        const feelsLike = document.querySelector('.feels-like');
        const pressure = document.querySelector('.pressure');

        const input = searchBar.value;
        const cityInfo = await getTest(input);

        console.log(cityInfo)

        const cityName = cityInfo.name;
        const temp = Math.floor(cityInfo.main.temp);
        const feelsLikeData = Math.floor(cityInfo.main.feels_like);
        const pressureData = cityInfo.main.pressure;

        console.log(cityName)
        console.log(temp)
        cityP.textContent = `City: ${cityName}`
        tempP.textContent = `Temp: ${temp}`
        feelsLike.textContent = `Feels like: ${feelsLikeData}`
        pressure.textContent = `Pressure: ${pressureData}`



    }



    const apiKeyStr = "b80bfc02e42b690c3e4ed8161d1574e4";

    async function getTest(city) {
        const geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&units=metric&limit=1&appid=` + "b80bfc02e42b690c3e4ed8161d1574e4");

        const obj = await geo.json();

        const coordinates = {
            lat: obj[0].lat,
            lon: obj[0].lon
        }

        const dataResp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=` + "b80bfc02e42b690c3e4ed8161d1574e4")
        const dataJSON = dataResp.json();

        return dataJSON;
    }


})();