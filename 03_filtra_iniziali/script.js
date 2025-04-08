/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names);

// Dichiara la funzione qui.
/** creo funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera
 * @param {Array} oldArray paramentro per creazione new array
 * @param {string} char parametro stringa per fare ricerca carattere
 * @param {Array} newArray restituzione array contente solo le parole che inziano con quella lettera
 */
function searchByChar(oldArray, char) {
  const newArray = [];
  for (let i = 0; i < oldArray.length; i++) {
    let currentElement = "";
    currentElement += oldArray[i];
    // console.log(currentElement);

    if (currentElement[0] === char) {
      newArray.push(currentElement);
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(searchByChar(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
