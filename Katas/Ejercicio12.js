// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}

// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
function findArrayIndex(array, text) {
  const findArr = array.find(textArr => textArr === text)
if(  findArr != undefined)
  {
   const posición= array.indexOf(text) 
   console.log(posición+1);  // Output: 2
  }
}

findArrayIndex(mainCharacters,"Luke")