import './scss/styles.scss';

const apiKey = 'fb08d9cd120c13609db1d162c71ed5d0';
const ciudad = 'Bogotá';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

function procesarRespuesta() {
  const respuesta = this.responseText;
  const datos = JSON.parse(respuesta);
  console.log(datos);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', procesarRespuesta);
oReq.open('GET', url);
oReq.send();
