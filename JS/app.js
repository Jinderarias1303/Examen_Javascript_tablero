const formulario = document.getElementById("formulario")

formulario.addEventListener("click", async (e) => {
  e.preventDefault

  const titulo_tarea = document.getElementById("titulo").value;
  console.log(titulo_tarea)
  const descripcion = document.getElementById("comentarios").value;
  const nivel = document.getElementById("material").value;
  const f_inicio = document.getElementById("fecha_inicio").value;
  const f_fin = document.getElementById("fecha_fin").value;

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