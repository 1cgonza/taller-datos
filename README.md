# Taller de representación de datos

## Sitios web donde se pueden descargar bases de datos en Excel:

- https://monitor.salahumanitaria.co/
- http://centrodememoriahistorica.gov.co/observatorio/
- https://www.datos.gov.co/
- http://sish.sgc.gov.co/visor/

## Capturas con sensores del celular

- https://takeout.google.com/settings/takeout

## HTML y JavaScript: API's

Para usar los ejemplos, deben instalar en su computador NodeJS, Git y Yarn.

### En Mac

Los programas los vamos a instalar desde el terminal con los siguientes comandos.

**Homebrew**

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

**NodeJS**

```bash
brew install node
```

**Git**

```bash
brew install git
```

**Yarn**

```bash
brew install yarn
```

### Windows

Desde el terminal como **administrador**

**Chocolatey**

```bash
[/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"](https://chocolatey.org/install)
```

**NodeJS**

```bash
choco install nodejs
```

**Git**

```bash
choco install git
```

**Yarn**

```bash
choco install yarn
```

Teniendo estos programas instalados, pueden usar los ejemplos de este repositorio.

Desde el terminal, ir a la carpeta de trabajo:

Por ejemplo:

```bash
cd Desktop/alguna-carpeta/mi-carpeta-de-trabajo
```

Estando en esa carpeta, usamos git para clonar este repositorio:

```bash
git clone https://github.com/1cgonza/taller-datos.git .
```

Ahora vamos a alguno de los ejemplos e instalamos las dependencias:

```bash
cd taller-datos/api-openweather
```

Instalar dependencias:

```bash
yarn
```

Ya podemos iniciar el servidor local y trabajar:

```bash
yarn start
```

Este último comando inicia un servidor local, pueden abrir su carpeta de trabajo en un editor de código y modificar la página web. En cualquier explorador, pueden ver la página en la url: [localhost:8080](http://localhost:8080)

## Arduinos

Los ejemplos los encuentran en este repositorio en las carpetas que inician con el nombre "arduino-XXX"
