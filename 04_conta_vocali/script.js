/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log(word);

// Dichiara la funzione qui.
/** creo una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno
 * @param {string} string parametro in gresso
 * @param {number} numberVocali restutuzione parametro sul numero di vocali contenute nella stringa
 */

// function contNumberVocali(string) {
for (let i = 0; i < word.length; i++) {
  const currentChar = " ";
  console.log(currentChar);

  let numberVocali = 0;
  console.log(numberVocali);

  currentChar = currentChar + string[i];
  console.log(currentChar);
  // if (
  //   currentChar === "a" ||
  //   currentChar === "e" ||
  //   currentChar === "i" ||
  //   currentChar === "o" ||
  //   currentChar === "u"
  // ) {
  //   numberVocali += 1;
  // }
}
return numberVocali;
// }

// Invoca la funzione qui e stampa il risultato in console
console.log(contNumberVocali(word));
console.log(numberVocali);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
