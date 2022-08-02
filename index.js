const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

// Butonul de scroll to top
// Afisam butonul
const backToTop = document.querySelector("#back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.visibility = "hidden";
  }
});

//Functionalitatea butonului
function scrollToTop() {
  window.scrollTo(0, 0);
}
backToTop.addEventListener("click", scrollToTop);
