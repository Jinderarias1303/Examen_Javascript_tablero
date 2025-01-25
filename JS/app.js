document.getElementById("formulario").addEventListener("submit", async function (e) {
  e.preventDefault();

  //llamar los elementos del formulario
  const titulo_tarea = document.getElementById("titulo").value;
  console.log(titulo_tarea)
  const descripcion = document.getElementById("comentarios").value;
  console.log(descripcion)
  const nivel = document.getElementById("material").value;
  console.log(nivel)
  const f_inicio = document.getElementById("fecha_inicio").value;
  console.log(f_inicio)
  const f_fin = document.getElementById("fecha_fin").value;
  console.log(f_fin)

  try {
    const url = 'http://localhost:3000/completadas';
    const respuesta = await fetch(url,{
    method:'POST',
    body:JSON.stringify({titulo_tarea,descripcion,nivel,f_inicio,f_fin})
    })
    console.log("tarea cargada")
    if(!respuesta.ok){
      throw new Error("error al cargar la tarea")
    }
  }catch (error){
    console.log(error)
  }
});