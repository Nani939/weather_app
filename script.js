async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '69aea2489dfb2d0d1e1ffa11a75d06fb'; // Consider storing this in a server-side file
    const weatherBox = document.getElementById('weatherResult');
    const errorBox = document.getElementById('errorMessage');

    if (!city) {
        errorBox.textContent = 'Please enter a city name';
        errorBox.classList.remove('hidden');
        weatherBox.classList.add('hidden');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        document.getElementById('cityName').textContent = data.name;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity} %`;
        document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
        document.getElementById('clouds').textContent = `Clouds: ${data.clouds.all} %`;
        document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;
        document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherBox.classList.remove('hidden');
        errorBox.classList.add('hidden');

        // Change background based on weather
        const weatherMain = data.weather[0].main.toLowerCase();
        document.body.className = ''; // Reset previous
        if (["clear", "clouds", "rain", "snow", "mist", "thunderstorm"].includes(weatherMain)) {
            document.body.classList.add(weatherMain);
        } else {
            document.body.classList.add("sunny"); // Fallback background
        }

    } catch (error) {
        errorBox.textContent = `Error: ${error.message}`;
        errorBox.classList.remove('hidden');
        weatherBox.classList.add('hidden');
    }
}