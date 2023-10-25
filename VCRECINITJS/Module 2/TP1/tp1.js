//Q1
//Créer un tableau contenant 5 mots de votre choix.
// En utilisant la fonction forEach() de javascript, afficher le contenu du tableau dans le terminal 
const mots = ["abeille", "guêpe", "coccinelle", "cafard", "libellule"]

mots.forEach(function(val){
    console.log(val)
})


//Q2
//En utilisant le même tableau et la fonction filter() de javascript,
//extraire les mots qui ne contiennent pas la lettre « a ». 
//Créer une fonction qui prend un tableau en paramètre afin d’afficher son contenu. 
//Tester là avec ce que renvoie la fonction filter()

const pasDeA = mots.filter(mot => mot.indexOf('a') == -1)

function displayTab(tab){
    tab.forEach(function(val){
        console.log(val)
    })
}

displayTab(pasDeA)

//Q3
//Créer un compte à rebours (le nombre de départ est paramétrable), qui s'affiche dans le terminal
//et qui se lance après 3 secondes

function compteARebours(val) {
    let nombre = val;
    console.log(nombre);
    
	//setInterval retourne un identifiant pour ensuite pouvoir arreter le script.
    let intervalId = setInterval(function () {
        nombre--;

        console.log(nombre);

        if(nombre == 0){
            clearInterval(intervalId);
        }

    }, 1000)  
}
//ici 10 correspond au parametre de la méthode compteARebours et 3000 pour 3 secondes.
setTimeout(compteARebours, 3000, 10);


//Q4
//Créer une fonction qui peut renvoyer  soit une fonction ajoutant 10 à un nombre, 
//soit une fonction multipliant par 10 un nombre, 
//le choix de la fonction est passé en paramètre de la fonction englobante. 
//Appeler la fonction renvoyée et afficher le résultat

function operation(operateur){

    if(operateur == '+'){
        return (nombre) => nombre + 10
    }
    if(operateur == '*'){
        return (nombre) => nombre * 10
    }
}

//Ici on choisit l'opérateur * cela déclenche la multiplication.
let calcul = operation('*')
let resultat = calcul(20)
console.log(resultat);

