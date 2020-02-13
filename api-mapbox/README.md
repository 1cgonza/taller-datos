# API Mapbox

Para usar este ejemplo debemos crear una cuenta gratuita en [mapbox](https://www.mapbox.com/)

Mapbox tienen un editor de estilos en linea con el cual podemos diseñar nuestros mapas:

[Mapbox Studio](https://studio.mapbox.com/)

Luego de crear nuestro mapa, podemos hacer clic en "share" y copiar la referencia a "Style URL" y el "Access token" y los pegamos en el archivo src/index.js en las variables:

```javascript
const style = 'mapbox://styles/xxxxxxxxx';
const token = 'pk.xxxxxxx';
```

De nuevo, para iniciar nuestro servidor local y ver el mapa usamos:

```bash
yarn start
```

y abrimos el explorador en: [localhost:8080](http://localhost:8080/)

Para agregar diferentes funcionalidades al mapa, referirse a la documentación de [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/)
