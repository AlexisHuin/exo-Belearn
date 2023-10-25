// Créer un tableau contenant 5 mots de votre choix.
// En utilisant la fonction forEach() de javascript, afficher le contenu du tableau dans le terminal

const list = ["zelda", "Link", "Ganondorf", "Impa", "Zora"];

// tableau.forEach(e => {
//     console.log(e)
// });

//En utilisant le même tableau et la fonction filter() de javascript,
//extraire les mots qui ne contiennent pas la lettre « a ».
//Créer une fonction qui prend un tableau en paramètre afin d’afficher son contenu.
//Tester là avec ce que renvoie la fonction filter()

const noA = list.filter((e) => e.indexOf("a") == -1);

function monTableauSansA(array) {
  array.forEach((e) => {
    console.log(e);
  });
}

monTableauSansA(noA);

//Créer un compte à rebours (le nombre de départ est paramétrable), qui s'affiche dans le terminal
//et qui se lance après 3 secondes

function topDepart(i) {
  let count = i;
  console.log(count);

  let interval = setInterval(() => {
    count--;
    console.log(count);
    if (count == 0) {
      clearInterval(interval);
    }
  }, 1000);
}

setTimeout(topDepart, 3000, 10);

//Créer une fonction qui peut renvoyer  soit une fonction ajoutant 10 à un nombre,
//soit une fonction multipliant par 10 un nombre,
//le choix de la fonction est passé en paramètre de la fonction englobante.
//Appeler la fonction renvoyée et afficher le résultat

function multiplicationAddition(choix) {
  if (choix === "*") {
    return (nmb) => nmb * 10;
  }
  if (choix === "+") {
    return (nmb) => nmb + 10;
  }
}

let test = multiplicationAddition('+')
let resultat = test(55)
console.log(resultat)