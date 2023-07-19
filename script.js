const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector ('#calculo1');
const input2 = document.querySelector ('#calculo2');
const btn = document.querySelector ('#btnCalcular');
const pResult = document.querySelector ('#result');
const boton = document.getElementById('miBoton');
const mensajeElemento = document.getElementById('mensaje');

form.addEventListener('submit', sumarInputValues);


function sumarInputValues (event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

function cambiarColorFondo(evento) {
    if (evento.key === 'v') {
      document.body.style.backgroundColor = 'green';
    } else if (evento.key === 'b') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'darkblue';
    }
  }
  
  document.addEventListener('keydown', cambiarColorFondo);

function mostrarMensaje() {
  const mensaje = ':)';
  console.log(mensaje);
  mensajeElemento.textContent = mensaje;
}
boton.addEventListener('click', mostrarMensaje);

document.getElementById("testeando").onclick = function() {
  document.getElementById("testtest").innerHTML = "¡TEST!";
};

document.getElementById("juliop").onclick = function() {
            alert("¡Se hizo clic en el botón!");
        };