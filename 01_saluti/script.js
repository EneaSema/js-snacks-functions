/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";
console.log(userName);

// Dichiara la funzione qui.

/** creazione funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]")
 * @param {string}  name valore iningresso che deve essere di tipo stringa
 * @param {string}  outputText return di tipo stringa
 */

function hiSaluto(name) {
  return `ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(hiSaluto(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
