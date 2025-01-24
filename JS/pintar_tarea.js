async function traerDatos(){
  const url = 'http://localhost:3000/pendientes'
  const respuesta = await fetch(url);
  const Datos = await respuesta.json();
  console.log(Datos)
}
traerDatos