async function display() {
            const DisplayInfo = async (city) => {
                let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '37a4dd4f89msh0050240a1e79695p17b517jsn4bbb2afbedbb',
                        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                    }
                };
                let align =  document.querySelector('.align');
                let loadingSection =  document.querySelector('.loadingSection');
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
                async function Fetching(){
                    align.style.display='none';
                    loadingSection.style.display='flex';
                    let res = await fetch(url, options);
                    let data = await res.json();
                    console.log(data.temp);
                    if (data.max_temp === undefined) {
                        window.alert('Please enter a valid city or country name')
                    }
                    else {
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
                button.addEventListener('click', () => {
                    let cityName = document.querySelector('.input')
                    let city = cityName.value;
                    DisplayInfo(city);
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
                        document.body.button.style.color = '#183153';
                    }
                    else {
                        navbar.style.border = '3px solid black';
                        moon.innerHTML = '🌑';
                        check++;
                        document.body.style.color = 'black';
                        document.body.style.background = 'white';
                        document.body.button.style.color = '#183153';
                    }
                })
        }
let loadingSection = document.querySelector('.loadingSection');
let align = document.querySelector('.align');
async function show() {
    await display();
}
show();