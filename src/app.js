const apiKey = "e48cdf50eb53d13573d54eafe00964b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");

async function check(city) {
  const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}  `);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

check("london");
