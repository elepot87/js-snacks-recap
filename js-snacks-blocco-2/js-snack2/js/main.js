// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati

const firstNames = [
  "Lara",
  "Michela",
  "Costanza",
  "Ilaria",
  "Francesco",
  "Andrea",
  "Luca",
];
const lastNames = [
  "Rossi",
  "Bianchi",
  "Dalla Costa",
  "Smith",
  "Doe",
  "Marchisio",
  "Gemma",
];

document.body.innerHTML = "<h1>i tre invitati sono";
for (let i = 0; i < 3; i++) {
  let index1 = Math.floor(Math.random() * firstNames.length);
  let index2 = Math.floor(Math.random() * lastNames.length);
  const invitato = `${firstNames[index1]} ${lastNames[index2]}`;
  document.body.innerHTML += " " + "<h4>" + invitato + "</h4>";
  console.log(invitato);
}

document.body.innerHTML += "</h1>";
