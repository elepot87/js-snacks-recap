// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

let num = parseInt(prompt("Inserisci un numero"));

if (num % 2 == 0) {
  console.log(num);
} else {
  console.log(num + 1);
}
