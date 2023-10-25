//Q1
/*let personnage = prompt("Quel personnage des Simpsons préférez-vous ?");

if(personnage){
    sessionStorage.setItem("personnage", personnage);
}
*/

//Q2
/*
let personnage = localStorage.getItem('personnage');

if(!personnage){
    personnage = prompt("Quel personnage des Simpsons préférez-vous ?");

    if(personnage){
        localStorage.setItem("personnage", personnage);
    }

}else{

    alert("Votre personnage est " + personnage);    
}
*/
//Q3
/*
let personnage = localStorage.getItem('personnage');

if(!personnage){
    personnage = prompt("Quel personnage des Simpsons préférez-vous ?");

    if(personnage){
        localStorage.setItem("personnage", personnage);
    }

}else{

    alert("Votre personnage est " + personnage);  

    let estModifie = confirm("Voulez-vous modifier cette information ?")

    if(estModifie){
        personnage = prompt("Quel personnage des Simpsons préférez-vous ?");

        if(personnage){
            localStorage.setItem("personnage", personnage);
        }
    }

}
*/
//Q4
//Création d'un fichier JSON


//Q5
/*
fetch('users.json').then((response) => response.json()).then((data) => displayData(data));

function displayData(data){
    let users = data.users;

    //utilisation de JSON.stringify() pour transformer les données en chaine de caractères
    localStorage.setItem('users', JSON.stringify(users))

    users = localStorage.getItem('users')
    console.log(users)
    //utilisation de JSON.parse()
    console.log(JSON.parse(users))
}
*/