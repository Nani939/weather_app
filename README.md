##Weather App Project

This project is a simple and responsive Weather Application built using HTML, CSS, and JavaScript. It fetches real-time weather information from the OpenWeatherMap API and displays it to the user based on the searched city.

Features

Search weather by city name

Display:

Temperature

Humidity

Wind speed

Weather description (Cloudy, Sunny, etc.)


Handles invalid city names gracefully

Responsive UI for mobile and desktop


Technologies Used

HTML5 - Structure of the web page

CSS3 - Styling and responsiveness

JavaScript (ES6) - API handling and dynamic DOM updates

OpenWeatherMap API - Weather data source


How to Run the Project

1. Clone or download the repository.


2. Open the index.html file in your browser.


3. Enter a city name in the search box and press enter to see the weather information.



Setup Instructions

1. Get a free API key from OpenWeatherMap.


2. In the JavaScript file, replace 'your_api_key_here' with your own API key:



const apiKey = 'your_api_key_here';

3. Save the file and refresh your browser.



Sample Code Snippet

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    // Process weather data
    console.log(data);
});

Project Screenshots

(Add screenshots of your project UI here)

Challenges Faced

Managing API errors for invalid city inputs

Designing responsive layout

Understanding asynchronous JavaScript (Promises)


Future Improvements

Add a 5-day weather forecast

Use geolocation to detect user’s current city automatically

Add light/dark theme toggle


License

This project is open-source and free to use.