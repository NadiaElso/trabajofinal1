
let conteiner=document.createElement("div")as HTMLDivElement;
let lista=document.createElement("ul") as HTMLUListElement;
let etiquetaContenido=document.createElement("li")as HTMLLIElement;
let contenido=document.createElement("textarea")as HTMLTextAreaElement;
let input=document.createElement("input")as HTMLInputElement;
let boton=document.createElement("button")as HTMLButtonElement;


conteiner.appendChild(lista);
lista.appendChild(etiquetaContenido);
etiquetaContenido.appendChild(contenido);
etiquetaContenido.appendChild(input);
etiquetaContenido.appendChild(boton);
console.log(conteiner);

let productos:string[]=new Array(2);
productos[0]="Azucar";
productos[1]="Yerba";


etiquetaContenido=productos.values;
console.log(etiquetaContenido);

boton.addEventListener("input", function(e) {
  let datoinput=document.querySelectorAll("input").innerHTML;
  console.log(datoinput);
}




 