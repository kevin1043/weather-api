
// const apiUrl1 = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid={apiKey1}`;        
// const apiUrl2 = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=apiKey2&include=minutely`;
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();
const port = 3000; // Choose any available port number

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public'))); app.use(express.json());
app.post('/getWeather', async (req, res) => {
    const cities = req.body.cities;
    console.log("check1");
    const weatherData = {};
    for (const city of cities) {
        try {
            const apiKey1 = process.env.API_KEY_1;
            const apiKey2 = process.env.API_KEY_2;
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey1}`;
            const geoResponse = await fetch(geoUrl);
            const geoData = await geoResponse.json();
            console.log('geoData:', geoData); // Added this console log for debugging

            if (geoData && geoData.length > 0) {
                const { lat, lon } = geoData[0];
                const weatherUrl = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey2}`;
                const weatherResponse = await fetch(weatherUrl);
                const weatherJson = await weatherResponse.json();
                console.log('weatherJson:', weatherJson); // Added this console log for debugging

                if (weatherJson && weatherJson.data && weatherJson.data.length > 0) {
                    const temperature = weatherJson.data[0].temp;
                    weatherData[city] = `${temperature}C`;
                } else {
                    weatherData[city] = 'N/A';
                }
            } else {
                weatherData[city] = 'N/A';
            }
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
            weatherData[city] = 'Error';
        }
    }

    res.json({ weather: weatherData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
