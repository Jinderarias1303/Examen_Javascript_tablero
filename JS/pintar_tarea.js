async function traerDatos(){
  const url = 'http://localhost:3000/pendientes'
  const respuesta = await fetch(url);
  const Datos = await respuesta.json();
  console.log(Datos)
  return Datos;
}
const div =document.createElement('div');
        div.innerHTML = `
            <div class="bg-gray-100 rounded-lg shadow-sm overflow-hidden w-full m-1 border-black border-2">
        <p class="text-sm text-gray-600">ID: ${}</p>
        <p class="text-sm text-gray-600">Tipo de habitación: ${}</p>
        <p class="text-sm text-gray-600">Descripción: ${}</p>
        <p class="text-sm text-gray-600">Servicios: ${}</p>

    </div>
</div>

        `;
        contenedor.appendChild(div);
obtenerDatos();
