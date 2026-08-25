import { useState, useEffect } from "react";

const Namma_uru = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
        );
        const data = await result.json();
        setWeatherData(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };
    fetchWeather();
  }, []);

const fetchNews = async () => {
  try {
    const result = await fetch(
      "https://newsapi.org/v2/everything?q=bengaluru&language=en&sortBy=publishedAt&apiKey=939882650d614f41908f74c28985d002"
    );
    const data = await result.json();
    setNewsData(data); 
  } catch (err) {
    console.error("Error fetching news:", err);
  }
};
  useEffect(() => {
    fetchNews();
  }, []);



  return (
    <div className="page-container namma-uru-page">
      <div className="uru-hero">
        <h1>Namma Bengaluru</h1>
        <p className="subtitle">Exploring the heart of India's Silicon Valley</p>
      </div>

      <div className="uru-layout">
        {/* Left Column: General Info & Live Weather */}
        <div className="uru-left">
          
          {/* Basic Information Card */}
          <div className="info-card">
            <h3>📍 Basic Information</h3>
            <div className="info-row">
              <span className="info-label">Nickname</span>
              <span className="info-value">"Silicon Valley of India"</span>
            </div>
            <div className="info-row">
              <span className="info-label">Official Language</span>
              <span className="info-value">Kannada</span>
            </div>
            <div className="info-row">
              <span className="info-label">Population</span>
              <span className="info-value">~1.4 Crore (14 Million)</span>
            </div>
            <div className="info-row">
              <span className="info-label">Area</span>
              <span className="info-value">741 km²</span>
            </div>
            <div className="info-row">
              <span className="info-label">Elevation</span>
              <span className="info-value">920 m (3,020 ft)</span>
            </div>
          </div>

          {/* Live Weather Card */}
          <div className="weather-info">
            <h3>☀️ Live Weather</h3>
            <div className="weather-row">
              <span className="weather-label">Location</span>
              <span className="weather-value">Bengaluru</span>
            </div>
            <div className="weather-row">
              <span className="weather-label">Temperature</span>
              <span className="weather-value">
                {weatherData ? `${weatherData.current.temperature_2m}°C` : "Loading..."}
              </span>
            </div>
            <div className="weather-row">
              <span className="weather-label">Humidity</span>
              <span className="weather-value">
                {weatherData ? `${weatherData.current.relative_humidity_2m}%` : "Loading..."}
              </span>
            </div>
            <div className="weather-row">
              <span className="weather-label">Wind Speed</span>
              <span className="weather-value">
                {weatherData ? `${weatherData.current.wind_speed_10m} km/h` : "Loading..."}
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: News Section */}
        <div className="uru-right">
          <h3>📰 Latest Updates & News</h3>
          
          <div className="news-list">
            {!newsData ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="news-card shimmer-card">
                    <div className="shimmer shimmer-image" />
                    <div className="news-content">
                      <div className="shimmer shimmer-title" />
                      <div className="shimmer shimmer-line" />
                      <div className="shimmer shimmer-line shimmer-line--short" />
                      <div className="news-meta">
                        <div className="shimmer shimmer-meta" />
                        <div className="shimmer shimmer-meta" />
                      </div>
                    </div>
                  </div>
                ))}
              </>

            ) : newsData.status === "error" ? (
              <p>⚠️ News error: {newsData.message}</p>
            ) : newsData.articles && newsData.articles.length > 0 ? (
              newsData.articles.slice(0, 6).map((article, index) => (
                <div key={article.url || index} className="news-card">
                  {article.urlToImage && (
                    <img src={article.urlToImage} alt={article.title} className="news-image" />
                  )}
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <div className="news-content">
                    <h4>{article.title}</h4>
                    
                    <p className="news-summary">{article.description}</p>
                    <div className="news-meta">
                      <span className="news-source">{article.source?.name}</span>
                      <span className="news-time">
                        {article.publishedAt
                          ? new Date(article.publishedAt).toLocaleDateString()
                          : ""}
                      </span>
                    </div>
                    
                  </div>
                  </a>
                </div>
              ))
            ) : (
              <p>No news available.</p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Namma_uru;