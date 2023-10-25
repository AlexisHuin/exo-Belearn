////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TP du Module 1////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TP Module 1:

//QUESTION 1
//A l'aide de la méthode Math.random, écrivez un algorithme qui s'arrête lorsque tous les nombres de la plage [0;100[ sont tirés au sort.
//Indiquer le nombre de tirage nécessaire.

//Proposition de correction

//EX1
let entiersTires = [];
let nbTirage = 0;
do{
    //Tire un nombre aléatoire
    let nombre = Number.parseInt(Math.random() * 100);

    //compter le nombre de tirage
    nbTirage++;
    //comparer la présence ou non de la valeur dans le tableau
    if(!entiersTires.includes(nombre)){
        //stocker les valeurs dans un tableau
        entiersTires.push(nombre);
    }    

//tant que les 100 nombres ne sont pas sortis
}while (entiersTires.length < 100) 
//afficher le tableau + tirage
console.log(entiersTires);
console.log(nbTirage + " tentatives")


//QUESTION 2
//Trier les lettres de la phrase par ordre alphabétique.

//Proposition de correction

let chaine ="une chaine avec des lettres dans un certain ordre pour donner du sens";
let tableau = Array.from(chaine.replaceAll(' ',''));
console.log(chaine);
console.log(tableau);
tableau.sort();
console.log(tableau);

//QUESTION 3
//Mettre en majuscule la première lettre de chaque mot de la phrase.

//Proposition de correction
let chaine = "une phrase sans majuscule";
let mots = chaine.split(" ");
var resultat = "";
for (let index = 0; index < mots.length; index++) {
    const mot = mots[index];
    mots[index] = mot.charAt(0).toUpperCase() + mot.substring(1, mot.length);    
}
console.log(mots);
chaine = mots.join(" ");
console.log(chaine);

//QUESTION 4
//Créer un dictionnaire en utilisant map() qui contient les couleurs 
//jaune, rouge, violet et bleu avec comme clé la première lettre de la couleur. 
//Créer un tableau à partir des clés du dictionnaire, servez-vous en pour tirer 5 clés de manière aléatoire
//et afficher la couleur correspondante dans le terminal

let dico = new Map([['j', 'jaune'], ['r', 'rouge'],['v', 'violet'],['b', 'bleu']])

let keys = Array.from(dico.keys())

for (let index = 0; index < 5; index++) {
    let i = Math.round(Math.random() * 3)
    console.log(dico.get(keys[i]))    
}
