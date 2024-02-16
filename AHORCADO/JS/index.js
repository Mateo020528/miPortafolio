const volver = document.getElementById("cerrar");
const Palabras = ["Riwi", "Chakras", "Programacion", "Compañerismo"];

let PalabraAdivinar = Palabras[Math.floor(Math.random() * Palabras.length)];
let PalabraGlobal = Array(PalabraAdivinar.length).fill("_");
let Vida = 9;

document.getElementById('palabra').innerText = PalabraGlobal.join(' ');

function EncontrarPalabra() {
    const inputElement = document.getElementById('palabra-input');
    const obtener = inputElement.value.toLowerCase();

    if (!/[a-z]/.test(obtener) || obtener.length !== 1) {
        document.getElementById('resultado').innerText = "Ingresa una letra válida.";
        return;
    }

    let letraAdivinada = false;

    for (let i = 0; i < PalabraAdivinar.length; i++) {
        if (PalabraAdivinar[i].toLowerCase() === obtener) {
            PalabraGlobal[i] = PalabraAdivinar[i];
            letraAdivinada = true;
        }
    }

    document.getElementById('palabra').innerText = PalabraGlobal.join(' ');

    if (!PalabraGlobal.includes('_')) {
        document.getElementById('resultado').innerText = "¡Felicidades! Has adivinado la palabra correctamente.";
        disableInput();
    } else if (!letraAdivinada) {
        Vida--;
        document.getElementById('intento').innerText = Vida;

        if (Vida === 0) {
            document.getElementById('resultado').innerText = "¡Oh no! Te has quedado sin intentos. La palabra era: " + PalabraAdivinar;
            disableInput();
        } else {
            document.getElementById('resultado').innerText = "La letra no está en la palabra.";
        }
    } else {
        document.getElementById('resultado').innerText = "";
    }

    inputElement.value = '';
}

function disableInput() {
    document.getElementById('palabra-input').disabled = true;
    document.querySelector('button').disabled = true;
}

function ReiniciarJuego() {
    PalabraAdivinar = Palabras[Math.floor(Math.random() * Palabras.length)];
    PalabraGlobal = Array(PalabraAdivinar.length).fill("_");
    Vida = 9;

    document.getElementById('palabra').innerText = PalabraGlobal.join(' ');
    document.getElementById('intento').innerText = Vida;
    document.getElementById('resultado').innerText = "";
    document.getElementById('palabra-input').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('palabra-input').value = '';
}

volver.addEventListener("click",()=>{
     let resultado = confirm("Quiere volver al menu?");
     if (resultado === true){
         window.location.href = "../index.html";
     }else {

     };
})



