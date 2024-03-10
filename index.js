const apiKey = "3c86c2a09b6401c1bb6cc4483cd96b22"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="


const searchBox = document.querySelector(" .search input")
const searchBtn = document.querySelector(" .search button")
const weatherIcon = document.querySelector(" .weather-icon");

async function checkweather(city){
    try {
        const response = await fetch(apiUrl + `${apiKey}` + `&q=${city}`);
        const data = await response.json();
        console.log(data)
        if(response.ok){
            let cityName = data.name;
            let temperature = Math.round(data.main.temp);
            let humidity = data.main.humidity ;
            let speed = (data.wind.speed ).toFixed(2)  ;
            
            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png"
            }
            else if (data.weather[0].main == "Clouds" ){
                weatherIcon.src = "images/clouds.png"
            }
            else if (data.weather[0].main == "Drizzle" ){
                weatherIcon.src = "images/drizzle.png"
            }
            else if (data.weather[0].main == "Mist" ){
                weatherIcon.src = "images/mist.png"
            }
            else if (data.weather[0].main == "Rain" ){
                weatherIcon.src = "images/rain.png"
            }
            else if (data.weather[0].main == "Snow" ){
                weatherIcon.src = "images/snow.png"
            }
            else if (data.weather[0].main == "Haze" ){
                weatherIcon.src = "images/haze.png"
            }
            else if (data.weather[0].main == "Smoke" ){
                weatherIcon.src = "images/smoke.png"
            }

            document.querySelector(".weather-name").innerHTML =  data.weather[0].main;
            document.querySelector(".city").innerHTML =  cityName;
            document.querySelector(".temp").innerHTML = temperature + `°C`;
            document.querySelector(".humidy").innerHTML = humidity + `%`;
            document.querySelector(".wind").innerHTML = speed + `km/h`;
        }
        else {
            weatherIcon.src = ""
            document.querySelector(".temp").innerHTML = `0°C`;
            document.querySelector(".city").innerHTML = "City not found!";
            document.querySelector(".humidy").innerHTML = `0 %`;
            document.querySelector(".wind").innerHTML = `0 km/h`;
            document.querySelector(".weather-name").innerHTML = ``;
            console.log("City not found!")
        }

    } catch (error) {
        console.log("Something went wrong : "+error);
    }
}
searchBtn.addEventListener('click', ()=> {
    checkweather(searchBox.value);
})


