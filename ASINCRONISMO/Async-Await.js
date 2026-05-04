async function obtenerDatos() {
  try {
    const res = await fetch("https://api.com/datos");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}