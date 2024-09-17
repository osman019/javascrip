// const terminosCondiciones  =  document.getElementById("terminos");

// const miForm = document.querySelector("#miForm")


// function isCheckboxOn() {

//     if  (terminosCondiciones.checked){
      
//         miForm.innerHTML += addForm ();
//     } else if (!terminosCondiciones.checked){
//       miForm.innerHTML="";
//       console.log("he sido deseleccionado");
  
//     }

// }

// function addForm() {
//     let resultado = ""
//     resultado += `<input type="text" id="miInput/>`
//     resultado += `<label for="miInput" >ingresa tu edad </label>`;
//     return resultado;
// }
// terminosCondiciones.addEventListener("change", isCheckboxOn);

// console.log(terminosCondiciones);

const textArea = document.querySelector("#inputparrafo");
const condicion  = document.getElementById("palabraMagica");
const resultado = document.getElementById("resultado");


   function actualizarResultado(){
   resultado.innerHTML = "";
   const palabras = textArea.value.split(" ")
   const palabraMagica = condicion.value.toLowercase();

   
   palabras.forEach(palabra => {
    if (palabra.toLowercase() != palabraMagica){
   resultado.innerHTML += `${palabra}`;
    }else {resultado.innerHTML += `<strong>${palabra,toUpperCase()}</strong>` } 
    
   });
 

}
textArea.addEventListener("change",actualizarResultado);
condicion.addEventListener("change",actualizarResultado);