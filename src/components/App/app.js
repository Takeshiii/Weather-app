import createElement from "../../assets/lib/create-element.js";
import weatherConditionCodes from "../../constants/weatherConditionCodes.js";

import style from "./style.scss";

import search from "../../assets/images/search.png";
import humidityImg from "../../assets/images/humidity.png";
import windImg from "../../assets/images/wind.png";

export default class App {
  constructor() {
    this.render();
    this.search();
  }

  render() {
    this.elem = createElement(`
    <div class="${style.wrapper}">
      <div class="${style.app}">
        <div class="${style.container}">
          <header class="${style.header}">
            <input class="${style.input}" placeholder="Enter city name" />
            <button class="${style.searchButton}">
              <img class="${style.search}" src="${search}" alt="Search image" />
            </button>
          </header>
          <div class="${style.error}">Invalid city name</div>
        </div>
        <div class="${style.container}">
          <main class="${style.main}">
            <div class="${style.information}">
              <div class="${style.weather}">
                <img class="${style.weatherImage}" src="" alt="Weather image" />
              </div>
              <div class="${style.weatherCondition}"></div>
              <div class="${style.temperature}"></div>
              <div class="${style.city}"></div>
            </div>
            <div class="${style.additional}">
              <div class="${style.additionalContainer}">
                <div class="${style.humidityImageContainer}">
                  <img class="${style.humidityImage}" src="" alt="Humidity image" />
                </div>
                <div class="${style.additionalInfoContainer}">
                  <div class="${style.humidityPercent}"></div>
                  <div class="${style.additionalText}">Humidity</div>
                </div>
              </div>
              <div class="${style.additionalContainer}">
                <div class="${style.windImageContainer}">
                  <img class="${style.windImage}" src="" alt="Wind image" />
                </div>
                <div class="${style.additionalInfoContainer}">
                  <div class="${style.windSpeed}"></div>
                  <div class="${style.additionalText}">Wind Speed</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>  
    `);
  }

  async searchCity() {
    const main = this.elem.querySelector(`.${style.main}`);
    const city = this.elem.querySelector(`.${style.input}`);
    const error = this.elem.querySelector(`.${style.error}`);
    const APIkey = "f36ae4b67d3588b4b5865bae7f2452cc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIkey}&units=metric`;

    if (city.value === "") {
      return;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        error.style.display = "none";
        city.value = "";
        main.style.display = "flex";
        this.displayWeather(data);
      } else {
        throw new Error("Error loading weather data");
      }
    } catch (err) {
      console.log(err.message);
      city.value = "";
      main.style.display = "none";
      error.style.display = "block";
    }
  }

  displayWeather(data) {
    const {
      weatherImage,
      weatherCondition,
      temperature,
      city,
      humidity,
      humidityImage,
      windImage,
      windSpeed,
    } = this.getElements();

    const {
      id,
      day,
      night,
      temperatureData,
      cityData,
      humidityData,
      windSpeedData,
      weatherConditionData,
    } = this.getWeatherInfo(data);

    this.updateTemperature(temperature, temperatureData);
    this.updateCity(city, cityData);
    this.updateHumidity(humidity, humidityImage, humidityData);
    this.updateWind(windSpeed, windImage, windSpeedData);
    this.updateWeatherCondition(weatherCondition, weatherConditionData);
    this.updateWeatherImage(weatherImage, id, day, night);
  }

  getElements() {
    const weatherImage = this.elem.querySelector(`.${style.weatherImage}`);
    const weatherCondition = this.elem.querySelector(
      `.${style.weatherCondition}`
    );
    const temperature = this.elem.querySelector(`.${style.temperature}`);
    const city = this.elem.querySelector(`.${style.city}`);
    const humidity = this.elem.querySelector(`.${style.humidityPercent}`);
    const humidityImage = this.elem.querySelector(`.${style.humidityImage}`);
    const windImage = this.elem.querySelector(`.${style.windImage}`);
    const windSpeed = this.elem.querySelector(`.${style.windSpeed}`);

    return {
      weatherImage,
      weatherCondition,
      temperature,
      city,
      humidity,
      humidityImage,
      windImage,
      windSpeed,
    };
  }

  getWeatherInfo(data) {
    const id = data.weather[0].id.toString();
    const day = data.weather[0].icon.includes("d");
    const night = data.weather[0].icon.includes("n");
    const temperatureData = Math.floor(data.main.temp);
    const cityData = data.name;
    const humidityData = data.main.humidity;
    const windSpeedData = data.wind.speed.toFixed(1);
    const weatherConditionData = data.weather[0].description;

    return {
      id,
      day,
      night,
      temperatureData,
      cityData,
      humidityData,
      windSpeedData,
      weatherConditionData,
    };
  }

  updateTemperature(temperatureElement, temperatureData) {
    temperatureElement.innerHTML = `${temperatureData}°C`;
  }

  updateCity(cityElement, cityData) {
    cityElement.innerHTML = cityData;
  }

  updateHumidity(humidityElement, humidityImage, humidityData) {
    humidityImage.src = humidityImg;
    humidityElement.innerHTML = `${humidityData} %`;
  }

  updateWind(windSpeedElement, windImage, windSpeedData) {
    windImage.src = windImg;
    windSpeedElement.innerHTML = `${windSpeedData} m/s`;
  }

  updateWeatherCondition(weatherConditionElement, weatherConditionData) {
    weatherConditionElement.innerHTML = `${weatherConditionData}`;
  }

  updateWeatherImage(weatherImage, weatherCode, day, night) {
    for (const group of weatherConditionCodes) {
      const code = group[weatherCode];
      if (code && day) {
        weatherImage.src = code.day;
      } else if (code && night) {
        weatherImage.src = code.night;
      }
    }
  }

  search() {
    this.elem.addEventListener("click", (event) => {
      const target = event.target;
      const searchButton = this.elem.querySelector(`.${style.searchButton}`);
      if (target === searchButton) {
        this.searchCity();
      }
    });

    this.elem.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.searchCity();
      }
    });
  }
}
