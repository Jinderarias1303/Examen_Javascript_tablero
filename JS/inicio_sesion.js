async function traerDatos(){
  const url = 'http://localhost:3000/usuarios'
  const respuesta = await fetch(url);
  const Datos = await respuesta.json();
  console.log(Datos)
  return Datos;
}
traerDatos();
console.log("llego hasta aqui!")
//cargar dom
document - addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"))
  const btn_iniciar = document.getElementById("inicio")
  if (usuario) {
    btn_iniciar = document.getElementById("inicio").textContent = "cerrar sesion"
    btn_iniciar = document.getElementById("inicio").style.background = "red"
  } else {
    alert("no se pudo traer el usuario")
  }
});



//iniciar sesion
const btn_iniciar = document.getElementById("btn_iniciar")

btn_iniciar.addEventListener("click", async () => {
  const correo = document.getElementById("Email");
  const contraseña = document.getElementById("contraseña");

  const datos = await traerDatos();
  const ususario = datos.find(user => user.correo === correo.value && user.contraseña === contraseña.value);
  console.log(ususario)
  alert("sesion iniciada y guardada dirijase el inicio")
  if (ususario) {
    localStorage.setItem("usuario", JSON.stringify(ususario))
    btn_iniciar = document.getElementById("incio").textContent = "cerrar sesion"
    btn_iniciar = document.getElementById("inicio").style.background = "red"
    
  } else {
    alert("no se pudo iniciar sesion")
  }
});

