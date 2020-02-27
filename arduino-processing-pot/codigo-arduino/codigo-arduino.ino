int pinPot = A0;

void setup() {
  Serial.begin(9600);
  pinMode(pinPot, OUTPUT);
  hacerContacto();
}

void loop() {
  if (Serial.available() > 0) {
    long val = analogRead(pinPot);

    Serial.write(val);
    delay(10);
  } 
}

void hacerContacto() {
  while (Serial.available() <= 0) {
    Serial.write('A');
    delay(300);
  }
}
