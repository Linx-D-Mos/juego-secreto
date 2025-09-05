let intentos = 1;
let palabra = '';
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;
console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        limpiarCampo();
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
    }

    intentos++;
    return;
};
function limpiarCampo() {
    return document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', `Ya se sortearon todos los números posibles: ${numeroMaximo}`);
    } else {
        // Si el numero generado esta incluido en la lista hacemos una opereación si no hacemos otra
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

};
function reiniciarJuego() {
    limpiarCampo();
    parametrosIniciales();

}
function parametrosIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
parametrosIniciales();

// function hi() {
//     console.log('Hola mamaguebo');
// }
// function salute() {
//     let nombre = prompt('Ingresa tú nombres');
//     return alert('Salute ' + nombre);
// }
// function multi(numero) {
//     return numero * 2;
// }
// function promedio(numero1, numero2, numero3) {
//     return ((numero1 + numero2 + numero3) / 3);
// }
// function mayor(numero1, numero2) {
//     let mayor = '';
//     if (numero1 > numero2) {
//         mayor = 'el numero ' + numero1 + ' es mayor';
//     } else if (numero1 == numero2) {
//         mayor = 'Son iguales';
//     } else {
//         mayor = 'el numero ' + numero2 + ' es mayor'
//     }
//     return mayor;
// }
// hi();
// salute();
// console.log(multi(2));
// console.log(promedio(2, 4, 6));
// console.log(mayor(3, 4));