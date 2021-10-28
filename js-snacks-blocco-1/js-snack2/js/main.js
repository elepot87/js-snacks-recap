// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero.
//  Il programma stampa la somma di tutti i numeri inseriti con for
//  e opzionalmente con while

// Versione for
// let somma = 0;

// for (let i = 0; i < 5; i++) {
//   let number = parseInt(prompt("Inserisci un numero"));
//   somma += number;
// }

// console.log(somma);

// Versione While
let somma = 0;
let count = 0;

while (count < 5) {
  let number = parseInt(prompt("Inserisci un numero"));
  somma += number;
  count++;
}

console.log(somma);
