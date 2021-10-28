// JSnack 2
//     L’utente inserisce due parole in successione, con due prompt.
//     Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivi un'altra parola");

if (firstWord.length < secondWord.length) {
  console.log(firstWord, secondWord);
} else if (firstWord.length > secondWord.length) {
  console.log(secondWord, firstWord);
} else {
  console.log("la lunghezza delle parole è la stessa");
}
