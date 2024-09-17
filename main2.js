

// //root
// const root = document.getElementById("root");
// //titulo
//  const titulo = document.createElement("h1");
//  titulo.innerHTML ="hola campus"; 
//  titulo.setAttribute("id","mititulo")
//  titulo.id = "mititulo";

//  //formulario//
//  const miForm = document.createElement("form");
//  miForm.id="miForm";

//  const nameInput = crearInput("nombre","text","ingrese el nombre");
//  const apellidoInput = crearInput("apellido","text","ingrese el apellido")

// const botonEnviar = document.createElement("button");
// botonEnviar.innerHTML = "enviar";

// //agrega en el html para visualisar
//     root.appendChild(titulo);
//     root.appendChild(miForm);

//     miForm.appendChild(nameInput);
//     miForm.appendChild(apellidoInput);
//     miForm.appendChild(botonEnviar);
// function crearInput(name,type,pleaceholder,min,max){
//     const miInput = document.createElement("input");
//     miInput.id =name;
//     miInput.name = name;
//     miInput.type = type;
//     miInput.placeholder =pleaceholder;
//     min ? miInput.setAttribute("min",min):"";
//     max ? miInput.setAttribute("max",max):"";
//     return miInput;
// }

// function mostarInfo(event){
//     event.preventDefault();
//     const formData = new FormData(miForm);
//     const formNombre = formData.get("nombre");
//     const formApellido = formData.get("apellido");
//     alert(`bienvenido ${formNombre}${formApellido}`);
// }

// setTimeout(()=>{
//     root.removeChild(titulo);
// },5000);



//root
const root = document.getElementById("root2");
//titulo
 const titulo = document.createElement("h1");
 titulo.innerHTML ="tareas"; 
 titulo.setAttribute("id","mititulo")
 titulo.id = "mititulo";

 //formulario//
 const miForm = document.createElement("form");
 miForm.id="miForm";

 const nameInput = crearInput("nombre","text","ingrese el nombre");
 const apellidoInput = crearInput("apellido","text","ingrese el apellido")

const botonEnviar = document.createElement("button");
botonEnviar.innerHTML = "eliminar";

//agrega en el html para visualisar
    root.appendChild(titulo);
    root.appendChild(miForm);

    miForm.appendChild(nameInput);
    miForm.appendChild(apellidoInput);
    miForm.appendChild(botonEnviar);
function crearInput(name,type,pleaceholder,min,max){
    const miInput = document.createElement("input");
    miInput.id =name;
    miInput.name = name;
    miInput.type = type;
    miInput.placeholder =pleaceholder;
    min ? miInput.setAttribute("min",min):"";
    max ? miInput.setAttribute("max",max):"";
    return miInput;
}

function mostarInfo(event){
    event.preventDefault();
    const formData = new FormData(miForm);
    const formNombre = formData.get("nombre");
    const formApellido = formData.get("apellido");
    alert(`bienvenido ${formNombre}${formApellido}`);
}

setTimeout(()=>{
    removeChild(titulo);
});