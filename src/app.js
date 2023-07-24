const apiKey = "e48cdf50eb53d13573d54eafe00964b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const weather = document.querySelector(".weather");
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const weather_icon = document.querySelector(".weather-icon");
async function check(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}  `);

  if (response.status == 404) {
    console.log(document.querySelector(".error"));
    document.querySelector(".error").style.display = "block";
    weather.style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weather_icon.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
      weather_icon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Mist") {
      weather_icon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Snow") {
      weather_icon.src = "images/snow.png";
    }
    if (data.weather[0].main == "Rain") {
      weather_icon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
      weather_icon.src = "images/drizle.png";
    }

    weather.style.display = "flex";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  check(searchBox.value);
});
