import{barcelona , roma , paris , londres } from './ciudades.js';

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

// funcion al hacer click
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // sacar todos los active del menu
        enlaces.forEach( function(enlace){
            enlace.classList.remove('active');
        });
        // colocar active en el correspondiente
        this.classList.add('active');
        
        // obtener el objeto correspondiente al enlace
        let contenido = obtenerContenido(this.textContent);

        // agregar los valores dentro del objeto
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

function obtenerContenido(enlace){
    // generamos un indice del contenido en el hmtl y el objeto que le corresponde
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres,
    };
    return contenido[enlace];
}