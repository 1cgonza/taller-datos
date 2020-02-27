int pin = A0;

void setup() {
  Serial.begin(9600);
  pinMode(pin, INPUT);
  hacerContacto();
}

void loop() {
  if (Serial.available() > 0) {
    int val = analogRead(pin);

    Serial.write(val);
    delay(10);
  }
}

// ------------------------------------------------------------------
// -------------- Código de comunicación con Procesing --------------
// ------------------------------------------------------------------ 

void hacerContacto() {
  while (Serial.available() <= 0) {
    Serial.write('A');
    delay(300);
  }
}
