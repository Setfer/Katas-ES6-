// Crea una función llamada swap que reciba un array y dos parametros que sean 
// indices del array. La función deberá intercambiar la posición de los valores de 
// los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(arr, position1, position2) {
  let temp = arr[position1];
  arr[position1] = arr[position2];
  arr[position2] = temp;
  return arr;
}

const result = swap(fantasticFour, 1, 2);
console.log(result)