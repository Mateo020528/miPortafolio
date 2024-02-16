const nombre = sessionStorage.getItem("nombre");
const Volver = document.getElementById("Volver");
if(nombre){
    location.href= "home.html";
}

//Agregamos la funcion
function Iniciar(){

//creamos los datos de y valores para el login
let correo = document.getElementById("correo");
let password = document.getElementById("password");


personas = [
    {
        Nombre : "Peter",
        Correo : "Peterparker@gmail.com",
        Password : "12345",
        imagenes : ["https://cdn.pixabay.com/photo/2012/02/25/19/04/animals-16908_1280.jpg"]
        

    },
    {
        Nombre : "Mateo",
        Correo : "Mateo030426@yahoo.com",
        Password : "12345",
        imagenes : [ "https://cdn.pixabay.com/photo/2023/07/27/14/49/milky-way-8153503_640.jpg"]
    },
    {
        Nombre : "juliana",
        Correo : "Juliana.lopez@gmail.com",
        Password : "12345",
        imagenes : ["https://cdn.pixabay.com/photo/2023/12/07/15/15/hyacinths-8435741_640.jpg"]  
    },
    {
        Nombre : "Juana",
        Correo : "Juana.censa@hotmail.com",
        Password : "12345",
        imagenes : ["https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289320_640.png" ]  
        
    },
    {
        Nombre : "Santiago",
        Correo : "Santiago0359@outlock.com",
        Password : "12345",
        imagenes : ["https://media.istockphoto.com/id/1038869662/es/vector/conjunto-de-bebidas-alcoh%C3%B3licas-aislado-botellas-de-sketch.jpg?s=612x612&w=0&k=20&c=3Es3CI6wnkasgOCaL_Iw2pv-p7XH6naquh3_IX0jCgE="]  
    }
];
//Este  if es para los colores de mis imputs
if(correo.value != ""){
    correo.classList.add("is-valid");
    correo.classList.remove("is-invalid");
} else{
    correo.classList.add("is-invalid");
    correo.classList.remove("is-valid")
};


// creamos la funcion forEach para respaldar que el dato ingresado cumpla con mi arreglo
personas.forEach(function(persona){
    if(correo.value == persona.Correo && password.value == persona.Password){
        sessionStorage.setItem("nombre", persona.Nombre);
        //Esta  location es para linkear mi pagina Html desde un javaScript
        location.href="home.html";
    }
})

};
Volver.addEventListener("click",()=>{
     let resultado =confirm("Quiere regresar al menu?");
     if(resultado === true){
        window.location.href = "../index.html";
     }
})
