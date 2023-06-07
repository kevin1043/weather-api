# Weather App

This is a Weather App that fetches real-time weather data from various APIs based on user input.

## Features

- Accepts names of multiple cities as input.
- Fetches real-time weather data from external weather APIs.
- Responds with real-time weather results for each city.

## Technologies Used

- Node.js
- Express
- HTML
- CSS
- JavaScript

## APIs Used

1. [OpenWeather API](https://openweathermap.org/)
   - Used for fetching geographical data (latitude and longitude) for a given city.
   - Endpoint: `http://api.openweathermap.org/geo/1.0/direct`

2. [Weatherbit API](https://www.weatherbit.io/)
   - Used for fetching real-time weather data based on latitude and longitude.
   - Endpoint: `https://api.weatherbit.io/v2.0/current`

## Setup Instructions

1. Clone the repository.

   ```bash
   git clone https://github.com/your-username/your-repo.git
   
2. Install dependencies.
    ```bash
    cd your-repo
    npm install
3. Set up environment variables.

   - Rename the .env.example file to .env.
   - Replace the placeholder values with your actual API keys for OpenWeather and Weatherbit.

4. Run the application
   ```bash
   npm start
 
5. Open your browser and navigate to http://localhost:3000 to access the Weather App.

## Setup Instructions
1. Enter the names of the cities you want to check the weather for in the input field.
2. Click the "Get Weather" button to fetch and display the real-time weather data for each city.

   
   
