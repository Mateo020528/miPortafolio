const volver = document.getElementById("Volver");

volver.addEventListener("click",()=>{
    let confirmar = confirm("Quieres regresar al menu?");
    if(confirmar === true){
        window.location.href = "../index.html";
        }
})