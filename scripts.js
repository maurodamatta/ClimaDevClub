let key = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarNatela(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".wheater").innerHTML = data.weather[0].description;
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
  document.querySelector(".humidity").innerHTML =
    "Umidade: " + data.main.humidity + "%";
  document.querySelector(".min-max").innerHTML =
    Math.floor(data.main.temp_min) + "°C | " + Math.floor(data.main.temp_max) + "°C";
  document.querySelector(".feels-like").innerHTML = 
    "Sensação Térmica: " + Math.floor(data.main.feels_like) + "°C";
}

async function buscarCidade(city) {
  let data = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  colocarNatela(data);
}

function cliqueiNoBotao() {
  let city = document.querySelector(".input-city").value;

  buscarCidade(city);
}
