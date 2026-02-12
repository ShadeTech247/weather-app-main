const inputLocation = document.querySelector("#search-button")

async function getWeatherInfo() {
    const locationResponse = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=1&language=en&format=json")
    const locationInfo = await locationResponse.json()
    
    const location = await locationInfo.results[0];
    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?${location.latitude}e=52.52&longitude=${location.longitude}&hourly=temperature_2m,relative_humidity_2m`)
    const weatherInfo = await weatherResponse.json()

    return weatherInfo
}