async function traerDatos(){
  const url = 'http://localhost:3000/usuarios/1'
  const respuesta = await fetch(url);
  const Datos = await respuesta.json();
  console.log(Datos)
}

const btn_iniciar = document.getElementById("btn_iniciar")

btn_iniciar.addEventListener("click", async ()=>{
 const correo = document.getElementById("Email").value;
 const contraseña = document.getElementById("contraseña").value;
 
 const Datos = await traerDatos;
 const datos = Datos.find( user => user.correo === correo && user.contraseña === contraseña)
console.log(datos)
 if(Datos){
  localStorage.setItem("usuario",JSON.stringify(datos))
  document.getElementById("incio").textContent="cerrar sesion"
  document.getElementById("inicio").style.background="red"
 }else{
  alert("no se pudo iniciar sesion")
 }
});

traerDatos()