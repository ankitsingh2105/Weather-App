console.log("Welcome Inspector! ✨");
let prevSearches = localStorage.getItem('prevSearches');
let array = [];

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var span = document.getElementById('span');
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    if (h)
        span.textContent =
            ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}
setInterval(time, 1000);
time();
if (prevSearches !== null) {
    array = JSON.parse(prevSearches);
}
else {
    array = [];
}
function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function changeTime(time) {
    let unix_timestamp = time
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}
function changeTime1(time) {
    let unix_timestamp = time
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var formattedTime = hours - 12 + ':' + minutes.substr(-2);
    return formattedTime;
}
let clearLocaldata = document.querySelector('#clearButton');
clearLocaldata.addEventListener('click', function () {
    let displayInfo = document.querySelector('.prevInfo1');
    let defaultCity = localStorage.getItem('defaultPlace')
    let defArray = [];
    defArray = JSON.parse(defaultCity);
    localStorage.removeItem('prevSearches');
    defArray.forEach((e) => {
        displayInfo.innerHTML = `
        <div class="indexhead2">
        <div class="ingrid center cityplus">${e.place}</div>
        <div class="ingrid center tempplus">${e.temperature}°C</div>
        <div class="ingrid center windplus">${e.wind}km/h</div>
        <div class="ingrid center humplus">${e.humidity}%</div>
        </div>`
    })
})
function display_Search() {
    let check = localStorage.getItem('prevSearches');
    if (check !== null) {
        let newArray = [];
        newArray = JSON.parse(localStorage.getItem('prevSearches'))
        let displayInfo = document.querySelector('.prevInfo1');
        newArray.forEach((e) => {
            displayInfo.innerHTML += `
            <div class="indexhead2">
            <div class="ingrid center cityplus">${e.place}</div>
            <div class="ingrid center tempplus">${e.temperature}°C</div>
            <div class="ingrid center windplus">${e.wind}m/s</div>
            <div class="ingrid center humplus">${e.humidity}%</div>
            </div>`
        })
    }
}
const DisplayInfo = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=605b5adc1b1f5d216518eb1c953c563d`
    let align = document.getElementsByClassName('align');
    let loadingSection = document.querySelector('.loadingSection');
    let info1 = document.querySelector('.info1');
    let info4 = document.querySelector('.info4');
    let info5 = document.querySelector('.info5');
    let cityname = document.querySelector('.city');
    let info2 = document.querySelector('.info2');
    let info3 = document.querySelector('.info3');
    let align1 = document.querySelector('.aligns1');
    let align2 = document.querySelector('.aligns2');
    let align3 = document.querySelector('.aligns3');
    let align4 = document.querySelector('.aligns4');
    let align5 = document.querySelector('.aligns5');
    let align6 = document.querySelector('.aligns6');
    let align7 = document.querySelector('.aligns7');
    let align8 = document.querySelector('.aligns8');
    let align9 = document.querySelector('.aligns9');
    let align10 = document.querySelector('.aligns10');
    let align11 = document.querySelector('.aligns11');
    let align12 = document.querySelector('.aligns12');
    let align13 = document.querySelector('.aligns13');
    let align14 = document.querySelector('.aligns14');
    let align15 = document.querySelector('.aligns15');
    let small = document.querySelector('.small');
    align[0].style.display = 'none';
    loadingSection.style.display = 'flex';
    let res = await fetch(url);
    let data = await res.json();
    if (data.list[0].main.temp === undefined) {
        window.alert('OOPS! The input is not present in the Database -', city, " -")
    }
    else {
        city = capitalizeFirstLetter(city);
        let celTemp = Math.trunc(data.list[0].main.temp - 273.15)
        array.push({
            "place": city,
            "temperature": celTemp,
            "wind": data.list[0].wind.speed,
            "humidity": data.list[0].main.humidity
        })
        let defaultPlace = localStorage.getItem('defaultPlace');
        if (defaultPlace === null) {
            localStorage.setItem('defaultPlace', JSON.stringify(array));
        }
        array = getUniqueListBy(array, "place");
        localStorage.setItem('prevSearches', JSON.stringify(array));
        cityname.innerHTML = city;
        align1.innerHTML = "<strong>Max Temperature</strong>: " + Math.trunc(data.list[0].main.temp_max - 273.15) + '°C';
        align2.innerHTML = "<strong>Min Temperature</strong>: " + Math.trunc(data.list[0].main.temp_min - 273.15) + '°C';
        align3.innerHTML = "<strong>Pressure</strong>: " + Math.trunc(data.list[0].main.pressure - 273.15) + ' hPc';
        align4.innerHTML = "<strong>Wind Degree</strong>: " + data.list[0].wind.deg + '°';
        align5.innerHTML = "<strong>Wind Speed</strong>: " + data.list[0].wind.speed + ' m/s';
        align6.innerHTML = "<strong>Gust speed</strong>: " + data.list[0].wind.gust + ' m/s';
        align7.innerHTML = "<strong>Feels Like</strong>: " + Math.trunc(data.list[0].main.feels_like - 273.15) + '°C';
        align8.innerHTML = "<strong>Precipitation Chances</strong>: " + data.list[0].pop + "%";
        align9.innerHTML = "<strong>Cloudness</strong>: " + data.list[0].clouds.all;
        align10.innerHTML = "<strong>Population</strong>: " + data.city.population;
        align11.innerHTML = "<strong>Latitude</strong>: " + data.city.coord.lat + '°';
        align12.innerHTML = "<strong>Longitude</strong>: " + data.city.coord.lon + '°';
        align13.innerHTML = "<strong>Sunrise</strong>: " + changeTime(data.city.sunrise) + " AM";
        align14.innerHTML = "<strong>Sunset</strong>: " + changeTime1(data.city.sunset) + " PM";
        align15.innerHTML = "<strong>Time Zone</strong>: " + data.city.timezone;
        small.innerHTML = "<strong>Overall</strong>: " + data.list[0].weather[0].description;
        info3.innerHTML = data.list[0].main.humidity + ' %';
        info5.innerHTML = changeTime(data.city.sunrise) + ' AM';
        info4.innerHTML = city;
        info1.innerHTML = Math.trunc(data.list[0].main.temp_max - 273.15) + '°C';
        info2.innerHTML = data.list[0].wind.speed + ' m/s';
    }
    let clear = document.querySelector('.prevInfo1');
    clear.innerHTML = '';
    align[0].style.display = 'grid';
    loadingSection.style.display = 'none';
    display_Search();
}
// DisplayInfo();

//  async ended  ✨✨✨✨✨✨


let date = document.querySelector('.date');
let datetime = new Date();
let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
date.innerHTML = dayArray[datetime.getDay()] + ', ' + datetime.getDate() + ' ' + month[datetime.getMonth()] + " " + datetime.getFullYear();

let index = 0;
let userLocation = localStorage.getItem('location');
if (index == 0) {
    console.log("entered null")
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }, function (error) {
        DisplayInfo('Nainital');
    });
}
let button = document.querySelector('.button');
let input = document.querySelector('.input');
button.addEventListener('click', () => {
    let cityName = document.querySelector('.input')
    let city = cityName.value;
    DisplayInfo(city);
    input.value = '';
})

let moon = document.querySelector('.moon');
let navbar = document.querySelector('.bar');
let indexhead = document.getElementsByClassName('indexhead');
let github = document.querySelector('.fa-github');
let check = 1;
moon.addEventListener('click', function (e) {
    if (check % 2 != 0) {
        navbar.style.border = '3px solid #fae105';
        moon.innerHTML = '☀️';
        moon.style.background = 'rgb(159, 218, 240)'
        check++;
        github.style.color = 'white';
        indexhead[0].style.border = '3px solid white';
        indexhead[1].style.border = '3px solid white';
        document.body.style.color = 'white';
        document.body.style.background = 'black';
    }
    else {
        navbar.style.border = '3px solid black';
        github.style.color = 'black';
        moon.style.background = 'black'
        moon.innerHTML = '🌑';
        check++;
        indexhead[0].style.border = '3px solid black';
        indexhead[1].style.border = '3px solid black';
        document.body.style.color = 'black';
        document.body.style.background = 'white';
    }
})




//  showing warm places  ✨✨✨✨✨✨

function disply_warm() {
    let showArray = [];
    showArray = JSON.parse(localStorage.getItem("warm"));
    showArray.forEach((e) => {
        famousPlaces.innerHTML += `
            <div class="indexhead2">
            <div class="ingrid center cityplus">${e.place}</div>
            <div class="ingrid center tempplus">${e.temperature}°C</div>
            <div class="ingrid center windplus">${e.wind}m/s</div>
            <div class="ingrid center humplus">${e.humidity}%</div>
            </div>
            `
    })
}
let test = 0;
let famousPlaces = document.querySelector('.famousPlaces');
if (test === 0) {
    let warmArray = [];
    let warmPlaces = ["Goa", "Chennai", "Gujrat", "Pondicherry", "Mumbai", "Jaisalmer", "Kochi", "Hyderabad", "Pune"];
    warmPlaces.forEach(element => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element}&appid=605b5adc1b1f5d216518eb1c953c563d`;
        fetch(url).then((e) => { return e.json() }).then((e) => {
            warmArray.push({
                "place": element,
                "temperature": Math.trunc(e.list[0].main.temp_max - 273.15),
                "wind": e.list[0].wind.speed,
                "humidity": e.list[0].main.humidity
            })
            localStorage.setItem("warm", JSON.stringify(warmArray), "4");
        })
    });
    disply_warm();
    test = 1;
}
else {
    disply_warm();
}

    //  warm places ended ✨✨✨✨✨✨