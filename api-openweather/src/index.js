import './scss/styles.scss';

const apiKey = 'fb08d9cd120c13609db1d162c71ed5d0';
const ciudad = 'Chia';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

function mostrarIcono(code) {
  const contenedor = document.getElementById('icon');
  contenedor.src = `http://openweathermap.org/img/wn/${code}@2x.png`;
  contenedor.innerText = icon;
}

function procesarRespuesta() {
  const respuesta = this.responseText;
  const datos = JSON.parse(respuesta);
  const iconCode = datos.weather[0].icon;

  mostrarIcono(iconCode);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', procesarRespuesta);
oReq.open('GET', url);
oReq.send();
