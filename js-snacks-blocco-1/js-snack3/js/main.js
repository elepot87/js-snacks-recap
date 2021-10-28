// JSnack 4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const numbers = [];

for (let i = 0; i < 6; i++) {
  let numUser = parseInt(prompt("Inserisci un numero"));
  if (numUser % 2 !== 0) {
    numbers.push(numUser);
  }
  console.log(numbers);
}
