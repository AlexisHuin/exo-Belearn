//////////////////////////////////QUESTION 1

// let simpsons = prompt('Personnage préféré simpsons?')

// if(simpsons) {
//     sessionStorage.setItem('simpsons', simpsons);
// }

/////////////////////////QUESTION 2

// let simpsons = localStorage.getItem("simpsons");

// if (!simpsons) {
//   simpsons = prompt("Personnage préféré simpsons?");

//   if (simpsons) {
//     localStorage.setItem("simpsons", simpsons);
//   } else {
//     alert("Tu as choisi" + simpsons);
//   }
// }

////////////////////////QUESTION 3

let simpsons = localStorage.getItem("simpsons");

if (!simpsons) {
  simpsons = prompt("Personnage préféré simpsons?");

  if (simpsons) {
    localStorage.setItem("simpsons", simpsons);
  }
} else {
  alert("Votre simpsons est " + simpsons);

  let siModif = confirm("Tu as changer d'avis ?");

  if (siModif) {
    simpsons = prompt("Personnage préféré simpsons?");

    if (simpsons) {
      localStorage.setItem("simpsons", simpsons);
    }
  }
}

////////////////////////////////QUESTION 4
fetch("users.json")
  .then((response) => response.json())
  .then((data) => displayData(data));

function displayData(data) {
  let users = data.users;

  //utilisation de JSON.stringify() pour transformer les données en chaine de caractères
  localStorage.setItem("users", JSON.stringify(users));

  users = localStorage.getItem("users");
  console.log(users);
  //utilisation de JSON.parse()
  console.log(JSON.parse(users));
}


////// JSON A REVOIR POUR MOI