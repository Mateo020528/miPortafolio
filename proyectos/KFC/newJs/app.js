//Parte del header
let root = document.querySelector(".root");
//container
let container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

// row
let row = document.createElement("div");
row.classList.add("row");
container.appendChild(row);

//col-md-4

let col = document.createElement("div");
col.classList.add("col-md-4");
row.appendChild(col);

//img
let img = document.createElement("img");
img.classList.appendChild("img-fluid");
img.setAttribute("src","./proyectos/kfc/hamburguesa-1.webp")
row.appendChild(img);






