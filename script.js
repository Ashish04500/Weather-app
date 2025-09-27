const cityinput=document.getElementById("cityinput");
const searchbtn=document.getElementById("searchbtn");
const resultdiv=document.getElementById("result");

searchbtn.addEventListener("click",()=>{
    const cityname=cityinput.value;
    const apiKey="8f8cd763ca769103399a9cf8906c2e6c";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const cityname=data.name;
        const temp=data.main.temp;
        const weatherdesc=data.weather[0].description;
        const humidity=data.main.humidity;
        const windspeed=data.wind.speed;
        const iconcode=data.weather[0].icon;
        const iconurl=`https://openweathermap.org/img/wn/${iconcode}@2x.png`;
        resultdiv.innerHTML=`
        <h2>Weather in ${cityname}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Description: ${weatherdesc}</p>
        <p><img src="${iconurl}" alt="Weather icon"></p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windspeed} m/s</p>
        `;
    })
    .catch(error=>console.log("Error:",error));
})