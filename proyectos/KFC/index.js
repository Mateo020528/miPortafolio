
//Creamos una funcion para cambiar los colores en cada click
function cambiarTemas(){
    //Luego creamos 2 variables paea obtener el Id de mis temas
    let theme = document.getElementById("cambioTema").value;
    let body = document.getElementById("tema");
//Iniciamos las condiciones para aplicar los temas
    if(theme == "1"){
        body.classList.add("theme-light");
        body.classList.remove("theme-Dark");
        body.classList.remove("theme-free");
    } else if(theme == "2"){
        body.classList.add("theme-Dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
    } else if(theme == "3"){
        body.classList.add("theme-free");
        body.classList.remove("theme-Dark)");
        body.classList.remove("theme-light");
    }
}

