// const persona = {
//     nombre: "juan",
//     presentacion: function() {
//         console.log(this.nombre);
//     }
// }
// const persona2 = {
//     nombre: "juan",
//     presentacion: function() {
//         console.log(this.nombre);
//     }
// }
// // OBJETO       -       CLASE
// const formulario = new FormData();
// const promesa = new Promise();

class Estudiante {
    constructor(nombre){
this.nombre = nombre;

    }; estudiar(){
        console.log("estoy estudiando")
    }

}
class estudiante1 extends Estudiante {
    #semestre = 8 ; 
   constructor(nombre){
    super(nombre)
   }
   estudiar(){
    console.log("estoy estudiante en la universidad");

   }
   get semestre(){
    return this.#semestre;
   }
    }

new Estudiante("karen").estudiar();
const estudiante1 = new Estudiante("juan");
estudiante1.edad = 16;
estudiante1.estudiar();
console.log(estudiante1) 
//estudiante1.nombre = "juan"
console.log(estudiante1);