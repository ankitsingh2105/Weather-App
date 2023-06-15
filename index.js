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
let warmPlaces = ["Goa", "Chennai", "Gujrat", "Pondicherry", "Mumbai", "Jaisalmer", "Kochi", "Hyderabad", "Pune"];
const hillStations = ["Manali", "Darjeeling", "Shimla", "Ooty", "Mussoorie", "Munnar", "Nainital", "Srinagar", "Ladakh", "Coorg"];
hillStations.push("Kodaikanal", "Gangtok", "Lansdowne", "Auli", "Kasauli", "Tawang", "Chail", "Dalhousie");



//  todo: warm places ended ✨✨✨✨✨✨

async function display_Search() {
    let check = localStorage.getItem('prevSearches');
    if (check !== null) {
        let newArray = [];
        newArray = JSON.parse(localStorage.getItem('prevSearches'))
        let displayInfo = document.querySelector('.prevInfo1');
        newArray.forEach((e) => {
            displayInfo.innerHTML += `
            <div class="indexhead3">
            <div class="ingrid center cityplus" style="color : #fab005 ; text-shadow: .5px -.2px 0px black; ">${e.place}</div>
            <div class="ingrid center tempplus">${e.temperature}°C</div>
            <div class="ingrid center windplus">${e.wind}m/s</div>
            <div class="ingrid center humplus">${e.humidity}%</div>
            </div>`
        })
    }
}


//  todo: showing warm places  ✨✨✨✨✨✨
//  todo: updated to async function ✨✨✨✨

async function disply_warm() {
    let str = ""
    let showArray = [];
    showArray = JSON.parse(sessionStorage.getItem("warm"));
    let famousPlaces = document.querySelector('.famousPlaces');
    showArray.forEach((e) => {
        str += `
            <div class="indexhead2">
            <div class="ingrid center cityplus" style="color : #fab005 ; text-shadow: .5px -.2px 0px black; " >${e.place}</div>
            <div class="ingrid center tempplus">${e.temperature}°C</div>
            <div class="ingrid center windplus">${e.wind}m/s</div>
            <div class="ingrid center humplus">${e.humidity}%</div>
            </div>`
    })
    famousPlaces.innerHTML = str;
}

let test = sessionStorage.getItem("warm");
if (test === null) {
    let warmArray = [];
    hillStations.forEach(element => {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${element}&appid=605b5adc1b1f5d216518eb1c953c563d`;
        fetch(url).then((e) => { return e.json() }).then((e) => {
            warmArray.push({
                "place": element,
                "temperature": Math.trunc(e.list[0].main.temp_max - 273.15),
                "wind": e.list[0].wind.speed,
                "humidity": e.list[0].main.humidity
            })
            sessionStorage.setItem("warm", JSON.stringify(warmArray));
        })
    });
}

const DisplayInfo = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=605b5adc1b1f5d216518eb1c953c563d`
    let align = document.getElementsByClassName('align');
    let loadingSection = document.querySelector('.loadingSection');
    let info1 = document.querySelector('.info1');
    let info4 = document.querySelector('.info4');
    let info5 = document.querySelector('.info5');
    let info6 = document.querySelector('.info6');
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
    let align16 = document.querySelector('.aligns16');
    let align17 = document.querySelector('.aligns17');
    let align18 = document.querySelector('.aligns18');
    let small = document.querySelector('.small');
    align[0].style.display = 'none';
    loadingSection.style.display = 'flex';
    let res = await fetch(url);
    let data = await res.json();
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
    align7.innerHTML = "<strong>Humidity</strong>: " + data.list[0].main.humidity + ' %';
    align8.innerHTML = "<strong>Precipitation Chances</strong>: " + data.list[0].pop + "%";
    align9.innerHTML = "<strong>Cloudness</strong>: " + data.list[0].clouds.all;
    align10.innerHTML = "<strong>Population</strong>: " + data.city.population;
    align11.innerHTML = "<strong>Latitude</strong>: " + data.city.coord.lat + '°';
    align12.innerHTML = "<strong>Longitude</strong>: " + data.city.coord.lon + '°';
    align13.innerHTML = "<strong>Sunrise</strong>: " + changeTime(data.city.sunrise);
    align14.innerHTML = "<strong>Sunset</strong>: " + changeTime(data.city.sunset);
    align15.innerHTML = "<strong>Time Zone</strong>: " + data.city.timezone;
    align17.innerHTML = "<strong>Status</strong>: " + data.list[0].weather[0].description;
    align16.innerHTML = "<strong>Time of forcast</strong>: " + data.list[0].dt_txt;
    align18.innerHTML = "<strong>Visibility</strong>: " + data.list[0].visibility;
    small.innerHTML = "<strong>Overall</strong>: " + data.list[0].weather[0].description;
    info3.innerHTML = data.list[0].main.humidity + ' %';
    info5.innerHTML = changeTime(data.city.sunrise);
    info4.innerHTML = city;
    info6.innerHTML = data.list[0].dt_txt.substr(11, 5);
    info1.innerHTML = Math.trunc(data.list[0].main.temp_max - 273.15) + '°C';
    info2.innerHTML = data.list[0].wind.speed + ' m/s';
    let clear = document.querySelector('.prevInfo1');
    clear.innerHTML = '';
    align[0].style.display = 'grid';
    loadingSection.style.display = 'none';
    display_Search();
    disply_warm();
}

//  todo : async(1) ended

let date = document.querySelector('.date');
let datetime = new Date();
let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
date.innerHTML = dayArray[datetime.getDay()] + ', ' + datetime.getDate() + ' ' + month[datetime.getMonth()] + " " + datetime.getFullYear();

let index = 0;
if (index == 0) {
    DisplayInfo('Nainital');
    index = 1;
}
let button = document.querySelector('.button');
let input = document.querySelector('.input');
button.addEventListener('click', () => {
    let cityName = document.querySelector('.input')
    let city = cityName.value;
    DisplayInfo(city);
    input.value = '';
})

let navbar = document.querySelector('.bar');
let indexhead = document.getElementsByClassName('indexhead');
let github = document.querySelector('.fa-github');
let sun = document.querySelectorAll('.sun');
let check = 1;
let moon = document.querySelector('.moon');
moon.addEventListener('click', function (e) {
    if (check % 2 != 0) {
        sun.forEach((e) => {
            e.style.background = 'url("./night.png") no-repeat 0 0';
            e.style.boxShadow = '2px 2px 4px white';
        })
        navbar.style.border = '3px solid #fae105';
        moon.innerHTML = '☀️';
        moon.style.background = '#2cf4ee'
        check++;
        // github.style.color = 'white';
        indexhead[0].style.border = '3px solid white';
        indexhead[1].style.border = '3px solid white';
        document.body.style.color = 'white';
        document.body.style.background = 'black';
    }
    else {
        sun.forEach((e) => {
            e.style.background = 'url(https://cdn.sstatic.net/Winterbash/img/bg-hat.png) no-repeat 0 0';
            e.style.boxShadow = '4px 6px 10px black';
        })
        navbar.style.border = '3px solid black';
        moon.style.background = 'black'
        moon.innerHTML = '🌑';
        check++;
        indexhead[0].style.border = '3px solid black';
        indexhead[1].style.border = '3px solid black';
        document.body.style.color = 'black';
        document.body.style.background = 'white';
    }
})

// Check browser support for SpeechRecognition API
const voiceCommandButton = document.getElementById('voice-command-button');
let op = document.querySelector(".shitt");
voiceCommandButton.addEventListener('click', ()=>{
    op.innerHTML = "clicked"
});
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    console.log("speech synthesis is working ")
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    op.innerHTML = "shitt secondone";
    recognition.onstart = () => {
        console.log('Voice command recognition started.');
        op.innerHTML = "shitt but op";
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('Recognized command:', transcript);
        document.querySelector('.input').value = transcript;
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
    const startVoiceRecognition = () => {
        recognition.start();
        console.log('Voice recognition started.');
    };
    voiceCommandButton.addEventListener('click', startVoiceRecognition);
}
else {
    console.error('Speech recognition not supported in this browser.');
    op.innerHTML = "shitt second";
}



