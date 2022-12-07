const DisplayInfo = (city) => {
    let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37a4dd4f89msh0050240a1e79695p17b517jsn4bbb2afbedbb',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    let info1 = document.querySelector('.info1');
    let cityname = document.querySelector('.city');
    cityname.innerHTML = city;
    let info2 = document.querySelector('.info2');
    let info3 = document.querySelector('.info3');
    let align1 = document.querySelector('.aligns1');
    let align2 = document.querySelector('.aligns2');
    // let align3 = document.querySelector('.aligns3');
    let align4 = document.querySelector('.aligns4');
    let align5 = document.querySelector('.aligns5');
    // let align6 = document.querySelector('.aligns6');
    let align7 = document.querySelector('.aligns7');
    let align8 = document.querySelector('.aligns8');
    // let align9 = document.querySelector('.aligns9');
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            if (response.max_temp === undefined) {
                window.alert('Please enter a valid city or country name')
            }
            else {
                console.log(response);
                console.log(response);
                // cityname.innerHTML = city
                align1.innerHTML = "Max Temperature: " + response.max_temp + '°C';
                align2.innerHTML = "Min Temperature: " + response.min_temp + '°C';
                align4.innerHTML = "Wind Degree: " + response.wind_degrees + '°';
                align5.innerHTML = "Wind Speed: " + response.wind_speed + ' km/h';
                align7.innerHTML = "Feels Like: " + response.feels_like;
                align8.innerHTML = "Cloud_pct: " + response.cloud_pct;
                info3.innerHTML = response.humidity + '%';
                info1.innerHTML = response.temp + '°C';
                info2.innerHTML = response.wind_speed + ' km/h';
            }
        })
        .catch(err => console.error(err));
}

let index = 0;
console.log("entered 1");
if (index == 0) {
    DisplayInfo('Haldwani');
    index = 1;
}

let button = document.querySelector('.button');
button.addEventListener('click', () => {
    let cityName = document.querySelector('.input')
    let city = cityName.value;
    console.log("here i am making another project", city)
    DisplayInfo(city);
})

let moon = document.querySelector('.moon');
let link = document.querySelector('.link');
let navbar = document.querySelector('.bar');
let check = 1;
moon.addEventListener('click', function (e) {
    if (check % 2 != 0) {
        document.body.style.background = 'black';
        navbar.style.background = 'white'
        navbar.style.color = 'black'
        link.style.color = 'black';
        document.body.style.color = 'white';
        navbar.style.fontWeight = '900'
        check++;
        moon.innerHTML = '☀️';
        document.body.button.style.color = '#183153';
    }
    else {
        document.body.style.background = 'white';
        document.body.button.style.color = '#183153';
        document.body.style.color = 'black';
        navbar.style.background = 'black'
        link.style.color = 'white';
        navbar.style.color = 'white'
        navbar.style.fontWeight = '500'
        moon.innerHTML = '🌑';
        check++;
    }
})