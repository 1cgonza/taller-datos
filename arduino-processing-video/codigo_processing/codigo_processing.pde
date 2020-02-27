// Debemos tener instalada la librería de video.

// importamos las librerias
import processing.video.*;
import processing.serial.*;
Serial puerto;
Movie video;


// variables globales
int val;
boolean primerContacto = false;
boolean reproduciendo = false;
int contador = 0;
int tiempoEspera = 300;

void setup() {
  size(406, 720); // (ancho, alto)
  printArray(Serial.list());
  // ...........................
  String nombrePuerto = Serial.list()[1]; // <----- revisar el numero del puerto [#]
  // ...........................
  puerto = new Serial(this, nombrePuerto, 9600);
  
  // el archivo de video debe ir en una carpeta llamada data
  video = new Movie(this, "perro.mp4"); // <---- cambiar con el nombre de su video
  video.loop();
  video.pause();
}

void draw() {
  background(30, 246, 210); // (r, g, b)
  println(val);
  if (reproduciendo) {
    image(video, 0, 0, width, height);
  }

  if (val > 50) {
    if (!reproduciendo) {
      reproduciendo = true;
      video.play();
    }
  } else {
    if (contador < tiempoEspera) {
      contador++;
    } else {
      reproduciendo = false;
      video.pause();
    }
  }
}

// ------------------------------------------------------------------
// -------------- Código de comunicación con Arduino ----------------
// ------------------------------------------------------------------ 
void serialEvent(Serial puerto) {
  int mensajeDeArduino = puerto.read();

  if (primerContacto == false) {
    println("¿Aló?");
    if (mensajeDeArduino == 'A') {
      puerto.clear();
      primerContacto = true;
      puerto.write('A');
      println(".....::::: Contacto exitoso :::::.....");
    }
  } else {
    val = mensajeDeArduino;

    puerto.write('A');
  }
}

void movieEvent(Movie m) {
  m.read();
}
