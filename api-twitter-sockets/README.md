# Twitter en tiempo real

En este ejemplo, podemos conectarnos a un "endpoint" especial del API de Twitter. En este caso la solicitud es diferente al resto de APIs. Mientras en el del clima solicitamos al API los datos cuando entramos a la página, en este caso nuestra aplicación va a solicitarle a Twitter que nos envíe twits que contengan las palabras que queremos consultar.

Es decir, en una petición normal a un API funciona así:

1. Cliente pide datos.
2. API recibe la solicitud y la procesa.
3. API envía el resultado al cliente.
4. Cliente recibe el resultado y la página web decide que hacer con los datos.

La que usamos acá funciona así:

1. Cliente pide permiso al API para dejar un canal de comunicación abierta entre la página web y Twitter.
2. Cliente pide al API que le envíe mensajes que contengan algunas palabras.
3. API queda alerta a revisar todos los mensajes que se registran en su plataforma y cuando alguno contiene alguna de las palabras se las manda al cliente.
4. Cliente recibe el resultado y la página web decide que hacer con los datos.

Para definir nuestras palabras ir a sockets/base.js
En la primera linea podemos agregar las palabras que queremos investigar a la variable `terms`

```javascript
const terms = 'palabra1,palabra2,etc';
```

Para iniciar el servidor, usamos de nuevo el comando:

```bash
yarn start
```

Podemos ver el ejemplo en el puerto `3000`

[localhost:3000](http://localhost:3000)
