function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

function saludar(nombre, edad) {
  if (esMayorDeEdad(edad)) {
    console.log("Hola, " + nombre + "! Bienvenido/a a nuestro sitio web para adultos.");
  } else {
    console.log("Hola, " + nombre + "! Eres menor de edad y no puedes acceder a nuestro sitio web.");
  }
}

// Llamada a la función con diferentes argumentos
saludar("Juan", 25);
saludar("María", 15);


Ciclo "for" inicial:
javascript
Copy code
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
Ciclo "while" equivalente:

javascript
Copy code
let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}
Ciclo "for" inverso:
javascript
Copy code
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
Ciclo "while" equivalente:

javascript
Copy code
let i = 10;
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

