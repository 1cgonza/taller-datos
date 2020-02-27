int trigPin = 2;
int echoPin = A0;
int led = 9;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(led, OUTPUT);
  hacerContacto();
}

void loop() {
  if (Serial.available() > 0) {
    long tiempo = clacularTiempo();
    long distancia = calcularDistanciaEnCm(tiempo);
  
    //verDistanciaEnMonitorSerial(tiempo);

    Serial.write(distancia);
    delay(10);
  }
  
}

void verDistanciaEnMonitorSerial(long tiempo) {
  Serial.print(calcularDistanciaEnCm(tiempo));
  Serial.println(" cm");
}

void prenderLED(long distancia) {
  if (distancia < 4) {
    digitalWrite(led,HIGH);
  } else {
    digitalWrite(led,LOW);
  }
}

void modularLED(long distancia) {
  if (distancia <= 34) {
    int intensidad = map(distancia, 0, 34, 0, 255);
    analogWrite(led, intensidad);  
  }
}

long clacularTiempo() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  return pulseIn(echoPin, HIGH); 
}

long calcularDistanciaEnCm(long tiempo) {
  return (tiempo / 2) / 29.1;
}

void hacerContacto() {
  while (Serial.available() <= 0) {
    Serial.write('A');
    delay(300);
  }
}
