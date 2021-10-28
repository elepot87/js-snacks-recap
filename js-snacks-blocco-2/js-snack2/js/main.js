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

for (let i = 0; i < 3; i++) {
  const guests = `${firstNames[i]} ${lastNames[i]}`;
  console.log(guests);
}
