let city = document.getElementById("txt");
let searchBtn = document.querySelector('.search-btn');
//API key required for every search
const appid = '4ae9bb13da8ee429f9405aa431fb5cc6'

const cities = [];


const dataOnClick = (e) => {
    const cityValue = e.target.innerText
    city.value = cityValue
    getWeather()
}

async function getWeather(e) {
    console.log(e)
    let lst = document.getElementById("recent");
    const APIurl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + appid + '&units=imperial'
    // const APIFiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city.value + '&cnt=5&appid=' + appid

    if (!cities.includes(city.value)) {
        let data = document.createElement("button");
        data.onclick = dataOnClick
        data.innerText = city.value;
        cities.push(city.value)
        data.setAttribute("class", "other-city")
        lst.appendChild(data)
    }

//for the current weather fetch
    const response = await fetch(APIurl)
        .then(function (res) {
            return res.json();
        });
    console.log(response);
    renderData(response)
    console.log(cities)

//for the 5 day weather fetch
    // const fiveDayResponse = await fetch(APIFiveDayURL)
    //     .then(function (res) {
    //         return res.json();
    //     });
    // console.log(fiveDayResponse);
    // renderData(fiveDayResponse)
};


searchBtn.addEventListener('click', getWeather);
storedCities = JSON.parse.data



const currentCity = document.querySelector('.current-city');
const currentDate = document.querySelector('.current-date');
const currentTemp = document.querySelector('.current-temp');
const currentWind = document.querySelector('.current-wind');
const currentHumidity = document.querySelector('.current-humidity');


const renderData = (weatherResponse) => {
    currentCity.innerText = weatherResponse.name;
    currentTemp.innerText = weatherResponse.main.temp;
    currentWind.innerText = weatherResponse.wind.speed + ' mph';
    currentHumidity.innerText = weatherResponse.main.humidity + '%';
    let date = new Date();
    var current_date = (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear();
    currentDate.innerText = current_date
}

const fiveDayBtn = document.querySelector('.five-day-btn');

fiveDayBtn.addEventListener('click', function () {
    alert('OpenWeatherMapAPI subscription needed for 5 day forecast')
});

// async function getFiveDay(e) {
//     console.log(e)
//     const APIFiveDayURL = 'https://api.openweathermap.org/data/2.5/daily?q=' + city.value + '&cnt=5&appid=' + appid + '&units=imperial'
//     const response = await fetch(APIFiveDayURL)
//         .then(function (res) {
//             return res.json();
//         });
//     console.log(response);
//     renderFiveDay(response)
//     console.log(cities)
// };

// fiveDayBtn.addEventListener('click', getFiveDay);

// const renderFiveDay = (weatherResponseFive) => {

// }
























// function GetData() {
//     fetch(url)
//         .then(response => {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }
//             console.log(response.headers.get("Content-Type"));
//             return response.json();
//         }
//         )
//         // .then(data => {
//         //     let text = JSON.parse(JSON.stringify(data))
//         // })
//         .catch(err => {
//             console.log('Fetch Error :-S', err);
//         });
// }