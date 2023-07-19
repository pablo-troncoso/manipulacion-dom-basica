var tachiwaza = ""; // Variable para almacenar las técnicas

var tecnica1 = prompt("Ingresa una técnica:");
var definicion1 = prompt("Ingresa la definición de la técnica:");
tachiwaza += tecnica1 + " - " + definicion1 + "\n";

var tecnica2 = prompt("Ingresa otra técnica:");
var definicion2 = prompt("Ingresa la definición de la técnica:");
tachiwaza += tecnica2 + " - " + definicion2 + "\n";

var tecnica3 = prompt("Ingresa una tercer técnica:");
var definicion3 = prompt("Ingresa la definición de la técnica:");
tachiwaza += tecnica3 + " - " + definicion3 + "\n";

console.log("Tachiwaza:\n" + tachiwaza);
//Tachiwaza:
//ko soto gari - pequeño gancho interior
//tsuri goshi - elevación de cadera
//yoko otoshi - caida lateral al vacio

var tachiwaza = ""; // Variable para almacenar las técnicas

for (var i = 1; i <= 3; i++) {
  var tecnica = prompt("Ingresa la técnica " + i + ":");
  var definicion = prompt("Ingresa la definición de la técnica " + i + ":");
  tachiwaza += tecnica + " - " + definicion + "\n";
}

console.log("Tachiwaza:\n" + tachiwaza);


var tachiwaza = ""; // Variable para almacenar las técnicas

for (var i = 1; ; i++) {
  var tecnica = prompt("Ingresa la técnica " + i + " (o escribe 'fin' para terminar):");

  if (tecnica.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicion = prompt("Ingresa la definición de la técnica " + i + ":");
  tachiwaza += tecnica + " - " + definicion + "\n";
}

console.log("Tachiwaza:\n" + tachiwaza);



var tachiwaza = ""; // Variable para almacenar las técnicas de tachiwaza
var osaeKomiWaza = ""; // Variable para almacenar las técnicas de Osae Komi Waza

// Bucle para las técnicas de tachiwaza
for (var i = 1; ; i++) {
  var tecnica = prompt("Ingresa la técnica de tachiwaza " + i + " (o escribe 'fin' para terminar):");

  if (tecnica.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicion = prompt("Ingresa la definición de la técnica de tachiwaza " + i + ":");
  tachiwaza += tecnica + " - " + definicion + "\n";
}

// Bucle para las técnicas de Osae Komi Waza
for (var j = 1; ; j++) {
  var tecnicaOsaeKomi = prompt("Ingresa la técnica de Osae Komi Waza " + j + " (o escribe 'fin' para terminar):");

  if (tecnicaOsaeKomi.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicionOsaeKomi = prompt("Ingresa la definición de la técnica de Osae Komi Waza " + j + ":");
  osaeKomiWaza += tecnicaOsaeKomi + " - " + definicionOsaeKomi + "\n";
}

console.log("Tachiwaza:\n" + tachiwaza);
console.log("Osae Komi Waza:\n" + osaeKomiWaza);

________________________


var tachiwaza = ""; // Variable para almacenar las técnicas de tachiwaza
var osaeKomiWaza = ""; // Variable para almacenar las técnicas de Osae Komi Waza
var shimeWaza = ""; // Variable para almacenar las técnicas de Shime Waza
var kansetsuWaza = ""; // Variable para almacenar las técnicas de Kansetsu Waza

// Bucle para las técnicas de tachiwaza
for (var i = 1; ; i++) {
  var tecnica = prompt("Ingresa la técnica de tachiwaza " + i + " (o escribe 'fin' para terminar):");

  if (tecnica.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicion = prompt("Ingresa la definición de la técnica de tachiwaza " + i + ":");
  tachiwaza += tecnica + " - " + definicion + "\n";
}

// Bucle para las técnicas de Osae Komi Waza
for (var j = 1; ; j++) {
  var tecnicaOsaeKomi = prompt("Ingresa la técnica de Osae Komi Waza " + j + " (o escribe 'fin' para terminar):");

  if (tecnicaOsaeKomi.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicionOsaeKomi = prompt("Ingresa la definición de la técnica de Osae Komi Waza " + j + ":");
  osaeKomiWaza += tecnicaOsaeKomi + " - " + definicionOsaeKomi + "\n";
}

// Bucle para las técnicas de Shime Waza
for (var k = 1; ; k++) {
  var tecnicaShime = prompt("Ingresa la técnica de Shime Waza " + k + " (o escribe 'fin' para terminar):");

  if (tecnicaShime.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicionShime = prompt("Ingresa la definición de la técnica de Shime Waza " + k + ":");
  shimeWaza += tecnicaShime + " - " + definicionShime + "\n";
}

// Bucle para las técnicas de Kansetsu Waza
for (var l = 1; ; l++) {
  var tecnicaKansetsu = prompt("Ingresa la técnica de Kansetsu Waza " + l + " (o escribe 'fin' para terminar):");

  if (tecnicaKansetsu.toLowerCase() === "fin") {
    break; // Sale del ciclo si se ingresa "fin"
  }

  var definicionKansetsu = prompt("Ingresa la definición de la técnica de Kansetsu Waza " + l + ":");
  kansetsuWaza += tecnicaKansetsu + " - " + definicionKansetsu + "\n";
}

console.log("Tachiwaza:\n" + tachiwaza);
console.log("Osae Komi Waza:\n" + osaeKomiWaza);
console.log("Shime Waza:\n" + shimeWaza);
console.log("Kansetsu Waza:\n" + kansetsuWaza);


function solicitarTecnicas(categoria) {
    var resultado = ""; // Variable para almacenar las técnicas
  
    for (var i = 1; ; i++) {
      var tecnica = prompt("Ingresa la técnica de " + categoria + " " + i + " (o escribe 'fin' para terminar):");
  
      if (tecnica.toLowerCase() === "fin") {
        break; // Sale del ciclo si se ingresa "fin"
      }
  
      var definicion = prompt("Ingresa la definición de la técnica de " + categoria + " " + i + ":");
      resultado += tecnica + " - " + definicion + "\n";
    }
  
    return resultado;
  }
  
  var tachiwaza = solicitarTecnicas("tachiwaza");
  var osaeKomiWaza = solicitarTecnicas("Osae Komi Waza");
  var shimeWaza = solicitarTecnicas("Shime Waza");
  var kansetsuWaza = solicitarTecnicas("Kansetsu Waza");
  
  console.log("Tachiwaza:\n" + tachiwaza);
  console.log("Osae Komi Waza:\n" + osaeKomiWaza);
  console.log("Shime Waza:\n" + shimeWaza);
  console.log("Kansetsu Waza:\n" + kansetsuWaza);
  
___________________


function solicitarTecnicas(categoria) {
    var tecnicas = [];
  
    while (true) {
      var tecnica = prompt("Ingresa la técnica de " + categoria + " (o escribe 'fin' para terminar):");
      if (tecnica.toLowerCase() === "fin") break;
  
      var definicion = prompt("Ingresa la definición de la técnica de " + categoria + ":");
      tecnicas.push({ tecnica, definicion });
    }
  
    return tecnicas;
  }
  
  var tachiwaza = solicitarTecnicas("tachiwaza");
  var osaeKomiWaza = solicitarTecnicas("Osae Komi Waza");
  var shimeWaza = solicitarTecnicas("Shime Waza");
  var kansetsuWaza = solicitarTecnicas("Kansetsu Waza");
  
  function seleccionarElementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  while (true) {
    var input = prompt("Presiona Enter para obtener una técnica aleatoria (o escribe 'fin' para terminar):");
    if (input.toLowerCase() === "fin") break;
  
    var categorias = [
      { nombre: "tachiwaza", tecnicas: tachiwaza },
      { nombre: "Osae Komi Waza", tecnicas: osaeKomiWaza },
      { nombre: "Shime Waza", tecnicas: shimeWaza },
      { nombre: "Kansetsu Waza", tecnicas: kansetsuWaza }
    ];
  
    var categoriaAleatoria = seleccionarElementoAleatorio(categorias);
    var tecnicaAleatoria = seleccionarElementoAleatorio(categoriaAleatoria.tecnicas);
  
    if (tecnicaAleatoria) {
      console.log("Categoría: " + categoriaAleatoria.nombre);
      console.log("Técnica aleatoria: " + tecnicaAleatoria.tecnica);
      console.log("Definición: " + tecnicaAleatoria.definicion);
    } else {
      console.log("No hay técnicas disponibles en la categoría seleccionada.");
    }
  }
  