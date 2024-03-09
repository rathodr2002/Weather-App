const apiKey = "3c86c2a09b6401c1bb6cc4483cd96b22"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=pune&appid="

async function checkweather(){
    try {
        const response = await fetch(apiUrl + `${apiKey}`);
        const data = await response.json();
        console.log("Inside Async Function")
        console.log(data);
    } catch (error) {
        console.log("Something went wrong : "+error);
    }

    let temp = data.main.temp();
    console.log(temp);   
}

checkweather();
