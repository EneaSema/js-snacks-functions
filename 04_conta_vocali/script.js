/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";
console.log(word);

// Dichiara la funzione qui.
/** creo una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno
 * @param {string} string parametro in gresso
 * @param {number} numberVocali restutuzione parametro sul numero di vocali contenute nella stringa
 */

function contNumberVocali(string) {
  let numberVocali = 0;
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];

    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      numberVocali += 1;
    }
  }
  return numberVocali;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(contNumberVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// function contNumberVocali(string) {
//     for (let i = 0; i < string.length; i++) {
//       // Prendo il carattere iesimo
//       const stringChar = string[i];

//       // creo una variabile che mi conti le vocali che incontro
//       let stringVocali = "";

//       // Controllo se il carattere è una vocale
//       if (
//         stringChar === "a" ||
//         stringChar === "e" ||
//         stringChar === "i" ||
//         stringChar === "o" ||
//         stringChar === "u"
//       ) {
//         stringVocali = stringVocali + stringChar;
//       }

//       const stringVocaliLength = stringVocali.length;
//       return stringVocaliLength;
//     }
//   }
