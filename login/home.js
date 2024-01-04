const nombre = sessionStorage.getItem("nombre");
document.getElementById("nombre").innerText= nombre;

if(!nombre){
    location.href= "index.html";    
}

function cerrarSesion(){
    sessionStorage.clear();
//agregamos el nombre de la persona que inicio la sesion.
    location.href= "index.html";
//getItem obtiene el nombre del Id de mi html
}
//Debo tener un error aqui en algun lado para no tener en cuenta el span(la pagina no cuenta con seguridad)