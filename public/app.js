const form = document.getElementById('weatherForm');
const weatherResults = document.getElementById('weatherResults');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.getElementById('cityInput');
    const cities = cityInput.value.split(',');
    console.log(cityInput);
    const response = await fetch('/getWeather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cities }),
    });

    const data = await response.json();

    let resultHTML = '';
    for (const city in data.weather) {
        resultHTML += `<p>${city}: ${data.weather[city]}</p>`;
    }
    weatherResults.innerHTML = resultHTML;
});
