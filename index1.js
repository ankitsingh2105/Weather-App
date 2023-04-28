let moon = document.querySelector('.moon1');
let check=1;
moon.addEventListener('click', function (e) {
    console.log("bc!");
    if (check % 2 != 0) {
        document.body.style.color = 'white';
        moon.innerHTML = '☀️';
        document.body.style.background = 'black';
    }
    else {
        document.body.style.color = 'black';
        moon.innerHTML = '🌑';
        document.body.style.background = 'white';
    }
    check++;
})