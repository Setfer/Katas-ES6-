// Usando la función anterior beneficiate de poder conocer el indice del array 
// para crear una función llamada removeItem que pasandole un array y un texto 
// como parametros (los mismos parametros que en el anterior ejercicio) llame a 
// la función anteriormente creada findArrayIndex y obten el indice para 
// posteriormente usar la función de javascript .splice() para eliminar el 
// elemento del array.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
// correctamente.

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
   console.log(posición+1); 
   return posición+1 
  }
}

findArrayIndex(mainCharacters,"Obi-Wan")

function removeItem (array, text){
  let positionArray = findArrayIndex(array,text) - 1
  array.splice(positionArray, 1)
  console.log(array)
}
removeItem(mainCharacters,"Obi-Wan")