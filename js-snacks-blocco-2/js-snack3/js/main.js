// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

// const numInt = [1, 2, 10, 25, 33, 50];

// let somma = 0;

// for (i = 0; i < 6; i++) {
//   if (i % 2 !== 0) {
//     somma += numInt[i];
//   }
//   console.log(somma);
// }

const numeri = [1, 3, 2, 6, 11, 30, 8, 20, 9, 0];
let somma = 0;
for (let i = 0; i < numeri.length; i++) {
  if (i % 2 !== 0) {
    somma += numeri[i];
  }

  document.body.innerHTML = `il risultato della somma degli elementi dispari contenuti nell'array<h1>${somma}</h1>`;
}
