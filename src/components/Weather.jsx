import { useState } from "react";

const Weather = () => {
  const [userLocation, setUserLocation] = useState(null);

  const fetchData = async () => {
    try {
      const result = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
      );
      const data = await result.json();
      setUserLocation(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="weather-container">
      {!userLocation ? (
        <button className="weather-button" onClick={fetchData}>
          Get Weather
        </button>
      ) : (
        <div className="weather-info">
          <h3>Weather Details</h3>
          <div className="weather-row">
            <span className="weather-label">Location</span>
            <span className="weather-value">Bengaluru</span>
          </div>
          <div className="weather-row">
            <span className="weather-label">Temperature</span>
            <span className="weather-value">{userLocation?.current?.temperature_2m}°C</span>
          </div>
          <div className="weather-row">
            <span className="weather-label">Humidity</span>
            <span className="weather-value">{userLocation?.current?.relative_humidity_2m}%</span>
          </div>
          <div className="weather-row">
            <span className="weather-label">Wind Speed</span>
            <span className="weather-value">{userLocation?.current?.wind_speed_10m} km/h</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;