
import React, { useState } from 'react';
import "./WeatherDiv.css";
 
import cloudsIcon from './images/clouds.png'; 
import clearIcon from './images/clear.png'; 
import rainIcon from './images/rain.png'; 
import drizzleIcon from './images/drizzle.png'; 
import mistIcon from './images/mist.png'; 
import humidityIcon from './images/humidity.png';
import windIcon from './images/wind.png';

export default function WeatherDiv() {
    const apiKey = "9fdff595b40d8c32b19a5cacbdb4ee2e";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState(cloudsIcon); 

    const checkWeather = async (city) => {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();
            console.log('Weather Data:', data); 
            
            
            if (data.main) {
                setWeatherData(data);
                setIcon(getWeatherIcon(data.weather[0].main));
            } else {
                alert('City not found!');
                setWeatherData(null);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
            setWeatherData(null); 
        }
    };

    const getWeatherIcon = (weather) => {
        switch (weather) {
            case "Clear":
                return clearIcon;
            case "Rain":
                return rainIcon;
            case "Drizzle":
                return drizzleIcon;
            case "Mist":
                return mistIcon;
            case "Clouds":
                return cloudsIcon; 
            default:
                return cloudsIcon; 
        }
    };

    const handleSearch = () => {
        if (city) {
            checkWeather(city);
        } else {
            alert('Please enter a city name!');
        }
    };

    return (
        <div className="Weather-card">
            <div className="Weather-search">
                <input
                    type="text" 
                    placeholder="Enter the name of city" 
                    spellCheck="false" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={handleSearch}>
                <i class="fa-solid fa-magnifying-glass" id="Weather-searchIcon"></i>
                </button>
            </div>

            {weatherData && (
                <div className="Weather-weather">
                    <img className="Weather-icon1" src={icon} alt="weather icon" />
                    <h1 className="Weather-temp">{weatherData.main.temp}°C</h1>
                    <h2 className="Weather-city">{weatherData.name}</h2>
                    <hr />
                </div>
            )}

            {weatherData && (
                <div className="Weather-details">
                    <div className="Weather-humid">
                        <img id="Weather-img2" src={humidityIcon} alt="humidity" />
                        <p className="Weather-humidity">{weatherData.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                    <div className="Weather-windspeed">
                        <img id="Weather-img3" src={windIcon} alt="wind" />
                        <p className="Weather-wind">{weatherData.wind.speed} km/h</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            )}
        </div>
    );
}
