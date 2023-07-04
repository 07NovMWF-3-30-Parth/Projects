async function checkWeather() {
    let city = document.getElementById("city").value
    let body = document.querySelector("body")
    // console.log(city)

    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=991f23912cbd0e195bf9f2c903c8b293&units=metric`
    try {
        const response = await fetch(API);
        const data = await response.json();

        console.log(data);

        let timezone = data.timezone;
        let sunrise = data.sys.sunrise
        let sunset = data.sys.sunset

        let weather = data.weather[0].description

        document.getElementById("cityName").innerHTML = city
        document.getElementById("weather").innerHTML = (data.weather[0].description)
        document.getElementById("temp").innerHTML = (data.main.temp);
        document.getElementById("feels").innerHTML = (data.main.feels_like);
        document.getElementById("humid").innerHTML = (data.main.humidity);
        document.getElementById("rise").innerHTML = new Date((timezone + sunrise) * 1000).toUTCString().slice(16, 25)
        document.getElementById("set").innerHTML = new Date((timezone + sunset) * 1000).toUTCString().slice(16, 25)
        document.getElementById("windspeed").innerHTML = (data.wind.speed)

        if (weather === "light rain" || weather === "rain" || weather === "light intensity drizzle" || weather === "drizzle") {
            body.className = ""
            body.className = "rain"
        } else if (weather === "haze" || weather === "mist") {
            body.className = ""
            body.className = "haze"
        } else if (weather === "clear sky") {
            body.className = ""
            body.className = "clearSky"
        } else if (weather === "few clouds" || weather === "scattered clouds" || weather === "overcast clouds" || weather === "broken clouds") {
            body.className = ""
            body.className = "fewClouds"
        }

        console.log(data.weather[0].description)

    } catch (error) {
        console.log('Error', error);
        alert("city not found")
    }

}
