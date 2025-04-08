/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/** creazione funzione con un nuovo con le iniziali di ogni parola dell'array fornito
 * @param {Array} oldArray vecchio array fonrito
 * @param { Array} newArray restituzione del nuvo array con le inziali
 */

function searchByInitial(oldArray) {
  const newArray = [];

  let currentElement = "";

  for (let i = 0; i < oldArray.length; i++) {
    currentElement = oldArray[i];

    for (let i = 0; i < currentElement.length; i++) {
      let currentCharCompare = "";
      currentCharCompare += currentElement[i];

      if (currentCharCompare === currentElement[0]) {
        newArray.push(currentCharCompare);
      }
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(searchByInitial(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"];
