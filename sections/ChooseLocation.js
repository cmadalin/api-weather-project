const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const vaslui = document.querySelector(".dropdown-menu .vaslui");
const iasi = document.querySelector(".dropdown-menu .iasi");
const cluj = document.querySelector(".dropdown-menu .cluj-napoca");
const constanța = document.querySelector(".dropdown-menu .constanța");
const brasov = document.querySelector(".dropdown-menu .brasov");
const busteni = document.querySelector(".dropdown-menu .busteni");

function updateCurrentCity(city) {
  // Selectam spatiul de pe ecran dedicat afisarii orasului curent si ii adaugam continut.
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  // Reafisam prognoza pe 5 zile, pentru noul oras.
  displayWeatherForecast(city);
}

// Adauagam event listenerii pe butoanele din dropdown.
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
vaslui.addEventListener("click", function () {
  updateWeather("Vaslui");
});
iasi.addEventListener("click", function () {
  updateWeather("Iași");
});
cluj.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
constanța.addEventListener("click", function () {
  updateWeather("Constanța");
});
brasov.addEventListener("click", function () {
  updateWeather("Brașov");
});
busteni.addEventListener("click", function () {
  updateWeather("Bușteni");
});
