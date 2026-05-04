function obtenerDatos(callback) {
  setTimeout(() => {
    console.log("Datos obtenidos");
    callback();
  }, 2000);
}

function procesarDatos() {
  console.log("Procesando datos...");
}

obtenerDatos(procesarDatos);

//salida

//(espera 2 segundos)
//Datos obtenidos
//Procesando datos...