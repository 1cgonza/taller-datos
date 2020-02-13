import processing.serial.*;
Serial puerto;
int val;
boolean primerContacto = false;

void setup() {
  size(800, 600);
  printArray(Serial.list());
  String nombrePuerto = Serial.list()[5];
  puerto = new Serial(this, nombrePuerto, 9600);
}

void draw() {
  background(val);
  int ancho = 25;
  int alto = val * 2;
  int x = (width / 2) - (ancho / 2);
  int y = height - alto;
  
  fill(30, 246, 210);
  rect(x, y, ancho, alto);
}

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
