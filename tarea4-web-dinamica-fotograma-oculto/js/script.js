const tarjetas = document.querySelectorAll(".tarjeta");
const divTitulo = document.getElementById("pelicula");

let contadorGiradas = 0; // contador para nº de tarjetas giradas

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => { //añadir evento activador

        tarjeta.classList.toggle("girado"); // agrega/quita la clase
        
        // condicional para el contador

        if (tarjeta.classList.contains("girado")) { 
            contadorGiradas++;

        } else {
            contadorGiradas--;
        }

        // condicional para mostrar el título

        if (contadorGiradas === tarjetas.length) { // si contador = 9 titulo activo
            divTitulo.classList.add("activo"); // agrega la clase

        } else {
            divTitulo.classList.remove("activo"); // quita la clase
        } 

        });
    });




