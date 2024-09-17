const root = document.getElementById("root");

const titulo = document.createElement("h1");
titulo.texContent = "todo list";

root.append(titulo);

const tareaInput = document.createElement("input");
tareaInput.placeholder = "ingresa tu nombre";
root.append(tareaInput);

const botonEnviar = document.createElement("button");
botonEnviar.textConten = "enviar"
root.append(botonEnviar);
