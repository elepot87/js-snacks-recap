// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.

const arr1 = ["Eleonora", "Michela", "Andrea", "Francesco"];

const arr2 = ["Paolo", "Luca", "Sara"];

while (arr1.length !== arr2.length) {
  if (arr1.length < arr2.length) {
    arr1.push("ciao");
  } else if (arr2.length < arr1.length) {
    arr2.push("ciao");
  }
}

console.log(arr1, arr2);
