const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", async (e) => {
  e.preventDefault

  const titulo_tarea = document.getElementById("titulo").value;
  const descripcion = document.getElementById("comentarios").value;
  const nivel = document.getElementById("material").value;
  const f_inicio = document.getElementById("fecha_inicio").value;
  const f_fin = document.getElementById("fecha_fin").value;

  try {
    const url = "http://localhost:3000/${nivel}";
    const respuesta = await fetch(url,{
    method:'POST',
    body:JSON.stringify({titulo_tarea,descripcion,nivel,f_inicio,f_fin})
    })
    if(!respuesta.ok){
      throw new Error("error al cargar la tarea")
    }
  }catch (error){
    console.log(error)
  }
});