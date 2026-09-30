/*Con el botón cambiar fondo, se cambiará el color teal por otro de tu elección, usar la funcion toogle para ello */

const botonFondo = document.querySelector("#boton__fondo"); //Creamos el boton en js

const fondo = document.querySelector("#cuerpo");

botonFondo.addEventListener("click", () => { fondo.classList.toggle("fondoAlternativo") });


/*Cambiar el tipo de letra, tamaño y color de los títulos cuando el ratón pase por encima.*/

const titulo = document.querySelectorAll(".titulo");

titulo.forEach((titulo) => {
    titulo.addEventListener("mouseover", () => {
        titulo.classList.add("resaltado");
    });

    titulo.addEventListener("mouseleave", () => {
        titulo.classList.remove("resaltado");
    });
});

/*Cambiar los textos de quienes somos por otros distintos, es decir, cambiar nombre, cargo y funciones de los recuadros, pulsar en la imagen de bob esponja de cada uno .*/

const datosPersonas1 = {
    "cuadro-gerente1": {
        nombre: "Oscar",
        cargo: "Gerente",
        funciones: "N. del T. persona que se dedica a la imprenta"
    },
    "cuadro-gerente2": {
        nombre: "Oscar",
        cargo: "Gerente",
        funciones: "N. del T. persona que se dedica a la imprenta"
    },
    "cuadro-subdirector1": {
        nombre: "Pedro",
        cargo: "Subdirector",
        funciones: "N. del T. persona que se dedica a la imprenta"
    },
    "cuadro-subdirector2": {
        nombre: "Pedro",
        cargo: "Subdirector",
        funciones: "N. del T. persona que se dedica a la imprenta"
    }
};


const datosPersonas2 = {
    "cuadro-gerente1": {
        nombre: "Ana",
        cargo: "Gerente General",
        funciones: "Supervisa todas las operaciones de la empresa"
    },
    "cuadro-gerente2": {
        nombre: "Luis",
        cargo: "Gerente Financiero",
        funciones: "Encargado de la contabilidad y finanzas"
    },
    "cuadro-subdirector1": {
        nombre: "Carla",
        cargo: "Subdirectora Académica",
        funciones: "Coordina los programas educativos"
    },
    "cuadro-subdirector2": {
        nombre: "Javier",
        cargo: "Subdirector de Marketing",
        funciones: "Gestión de campañas y comunicación"
    }
};

const imagen = document.querySelectorAll(".cuadro-personal img");

imagen.forEach((img) => {
    img.addEventListener("click", () => {
        const cuadro = img.closest(".cuadro-personal");
        const id = cuadro.id;

        const datosOriginales = datosPersonas1[id];
        const datosNuevos = datosPersonas2[id];

        const parrafos = cuadro.querySelectorAll(".datos-personal p");

        if (parrafos[0].textContent === datosOriginales.nombre) {

            parrafos[0].textContent = datosNuevos.nombre;
            parrafos[1].textContent = datosNuevos.cargo;
            parrafos[2].textContent = datosNuevos.funciones;
            
        } else {
            parrafos[0].textContent = datosOriginales.nombre;
            parrafos[1].textContent = datosOriginales.cargo;
            parrafos[2].textContent = datosOriginales.funciones;
        }
    });
});




/*Al cargar la página, las imagenes de bob esponja debe situarse en el centro del recuadro y dejando márgenes arriba y abajo de la imagen.*/