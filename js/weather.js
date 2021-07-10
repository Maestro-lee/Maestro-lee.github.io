const API_KEY = "4e746ebfd346d7dbafc27135e555ab05";
function posOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).
    then((response)=>response.json()).
    then((data)=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}
function posErr(){
    alert("can't find");
}

navigator.geolocation.getCurrentPosition(posOk, posErr);