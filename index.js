let button = document.querySelector('.button');
button.addEventListener('click' ,()=>{
    let cityName = document.querySelector('.input')
    let city = cityName.value;
    console.log("here i am making another project" , city)

    // let app = document.querySelector('#head');
    let cityname = document.querySelector('.city');
    let info1 = document.querySelector('.info1');
    let info2 = document.querySelector('.info2');
    let info3 = document.querySelector('.info3');
    let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '37a4dd4f89msh0050240a1e79695p17b517jsn4bbb2afbedbb',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
                cityname.innerHTML=city
                info3.innerHTML = response.humidity+'%';
                info1.innerHTML = response.temp+'°C';
                info2.innerHTML = response.wind_speed+' km/h';
        })
    .catch(err => console.error(err));
})