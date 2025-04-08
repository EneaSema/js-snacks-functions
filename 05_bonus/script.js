/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nameChoice = "Mario";
console.log(nameChoice);

// Dichiara la funzione qui.
/**creo una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito.
 * @param {string} parametrString parametro di stringa contentente un nome
 * @param {string} resultString restituzione di una stringa contenente un saluto dal nome fonrito che cambia in base all'ora
 */
function messageHi(parametrString) {
  const hour = new Date();
  let currentHour = hour.getHours();
  console.log(currentHour);

  let currentString = parametrString;
  let outputText = ``;

  if (currentHour >= 0 || currentString <= 13) {
    outputText = `Buongiorno ${currentString}`;

    return outputText;
  } else if (currentHour > 13 || currentString <= 17) {
    outputText = `Buon pomeriggio ${currentString}`;

    return outputText;
  } else if (currentHour > 17 || currentString <= 23) {
    outputText = `Buonasera ${currentString}`;

    return outputText;
  }
  console.log(outputText);
  return outputText;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(messageHi(nameChoice));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
