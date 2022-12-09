console.log("Welcome Inspector! ✨")
let prevSearches = localStorage.getItem('prevSearches');
let array = [];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '37a4dd4f89msh0050240a1e79695p17b517jsn4bbb2afbedbb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
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
let clearLocaldata = document.querySelector('#clearButton');
clearLocaldata.addEventListener('click', function () {
    let displayInfo = document.querySelector('.prevInfo1');
    let defaultCity = localStorage.getItem('defaultPlace')
    let defArray = [];
    defArray = JSON.parse(defaultCity);
    defArray.forEach((e) => {
        displayInfo.innerHTML = `
        <div class="indexhead2">
        <div class="ingrid center cityplus">${e.place}</div>
        <div class="ingrid center tempplus">${e.temperature}°C</div>
        <div class="ingrid center windplus">${e.wind}km/h</div>
        <div class="ingrid center humplus">${e.humidity}%</div>
        </div>`
    })
    localStorage.clear();
})
function display_Search() {
    // localStorage.clear()
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
                            <div class="ingrid center windplus">${e.wind}km/h</div>
                            <div class="ingrid center humplus">${e.humidity}%</div>
                            </div>`
        })
    }
}
async function display() {
    const DisplayInfo = async (city) => {
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
        let align = document.querySelector('.align');
        let loadingSection = document.querySelector('.loadingSection');
        let info1 = document.querySelector('.info1');
        let cityname = document.querySelector('.city');
        let info2 = document.querySelector('.info2');
        let info3 = document.querySelector('.info3');
        let align1 = document.querySelector('.aligns1');
        let align2 = document.querySelector('.aligns2');
        let align4 = document.querySelector('.aligns4');
        let align5 = document.querySelector('.aligns5');
        let align7 = document.querySelector('.aligns7');
        let align8 = document.querySelector('.aligns8');
        async function Fetching() {
            align.style.display = 'none';
            loadingSection.style.display = 'flex';
            let res = await fetch(url, options);
            let data = await res.json();
            if (data.max_temp === undefined) {
                window.alert('OOPS! The input not present in Database')
            }
            else {
                city = capitalizeFirstLetter(city);
                array.push({
                    "place": city,
                    "temperature": data.temp,
                    "wind": data.wind_speed,
                    "humidity": data.humidity
                })
                if (city === 'Nainital') {
                    localStorage.setItem('defaultPlace', JSON.stringify(array));
                }
                array = getUniqueListBy(array, "place");
                localStorage.setItem('prevSearches', JSON.stringify(array));
                cityname.innerHTML = city;
                align1.innerHTML = "Max Temperature: " + data.max_temp + '°C';
                align2.innerHTML = "Min Temperature: " + data.min_temp + '°C';
                align4.innerHTML = "Wind Degree: " + data.wind_degrees + '°';
                align5.innerHTML = "Wind Speed: " + data.wind_speed + ' km/h';
                align7.innerHTML = "Feels Like: " + data.feels_like;
                align8.innerHTML = "Cloud_pct: " + data.cloud_pct;
                info3.innerHTML = data.humidity + '%';
                info1.innerHTML = data.temp + '°C';
                info2.innerHTML = data.wind_speed + ' km/h';
            }
            let clear = document.querySelector('.prevInfo1');
            clear.innerHTML = '';
            display_Search();
            align.style.display = 'flex';
            loadingSection.style.display = 'none';
        }
        Fetching();
    }

    let dayArray = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = document.querySelector('.date');
    let datetime = new Date();
    date.innerHTML = dayArray[datetime.getDay() - 1] + ', ' + datetime.getDate() + ' ' + month[datetime.getMonth()] + " " + datetime.getFullYear();
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

    let moon = document.querySelector('.moon');
    let navbar = document.querySelector('.bar');
    let check = 1;
    moon.addEventListener('click', function (e) {
        if (check % 2 != 0) {
            navbar.style.border = '3px solid white';
            moon.innerHTML = '☀️';
            check++;
            document.body.style.color = 'white';
            document.body.style.background = 'black';
        }
        else {
            navbar.style.border = '3px solid black';
            moon.innerHTML = '🌑';
            check++;
            document.body.style.color = 'black';
            document.body.style.background = 'white';
        }
    })
}
let clear = document.getElementById('clearButton');
let prevInfo1 = document.querySelector('.prevInfo1');
async function show() {
    await display();
}
show();