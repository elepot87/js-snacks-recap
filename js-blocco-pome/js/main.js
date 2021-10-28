// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto.

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let num = prompt("Inserisce un numero di 4 cifre");
  let somma = 0;
  let media = 0;

  while (num.length !== 4 || isNaN(num)) {
    num = prompt("Inserisce un numero di 4 cifre");
  }
  for (let i = 0; i < num.length; i++) {
    somma += parseInt(num[i]);
    document.querySelector(
      ".result"
    ).innerHTML = `La somma delle cifre del numero che hai inserito è ${somma}`;
    media = somma / num.length;
    document.querySelector(
      ".result2"
    ).innerHTML = `La somma delle cifre del numero che hai inserito è ${media}`;
  }
});
