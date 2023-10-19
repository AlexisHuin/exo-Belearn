// QUESTION 1
let nbEntiers = []
let nbTirage = 0
do {
  let nombre = Math.floor(Math.random() * 100)
  nbTirage++;
  if (!nbEntiers.includes(nombre)) {
    nbEntiers.push(nombre);
  }
} while (nbEntiers.length < 100)

console.log(nbEntiers);
console.log(nbTirage + " try")

// QUESTION 2
let text1 =
  "une chaine avec des lettres dans un certain ordre pour donner du sens"
let tableauLettres = Array.from(text1.replaceAll(" ", ""))
tableauLettres.sort()
console.log(tableauLettres.join(""))

// QUESTION 3
let text2 = "une phrase sans majuscule"
let mots = text2.split(" ")
for (let index = 0; index < mots.length; index++) {
  const mot = mots[index]
  mots[index] = mot.charAt(0).toUpperCase() + mot.substring(1)
}
text2 = mots.join(" ")
console.log(text2)

// QUESTION 4
let monDico = new Map([
  ["b", "blois"],
  ["p", "paris"],
  ["v", "vierzon"],
  ["b", "bourges"],
]);
let keys = Array.from(monDico.keys())

for (let index = 0; index < 5; index++) {
  let randomIndex = Math.floor(Math.random() * keys.length)
  console.log(monDico.get(keys[randomIndex]))
}
