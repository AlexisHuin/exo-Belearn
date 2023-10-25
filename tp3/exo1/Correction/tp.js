//EX1
document.getElementById('changeColor').addEventListener('change', function(){
    document.body.style.backgroundColor = document.getElementById('changeColor').value   
})

//EX2
document.getElementById('title').addEventListener('mouseenter', function(){
    document.getElementById('title').innerText = "Mon nouveau titre"
})

document.getElementById('title').addEventListener('mouseleave', function(){
    document.getElementById('title').innerText = "Mon ancien titre"
})


//EX3
document.getElementById('title').addEventListener('mouseenter', changeTitle)
document.getElementById('title').addEventListener('mouseleave',resetTitle)
document.getElementById('secondTitle').addEventListener('mouseenter', changeTitle)
document.getElementById('secondTitle').addEventListener('mouseleave',resetTitle)

function changeTitle(event){  
	//event un paramètre automatiquement passé à la callback contenant les informations de l'évènement
	//currentTarget permet de récupérer l'élément sur lequel s'est passé l'évènement
    event.currentTarget.innerText = 'Mon nouveau titre'
}

function resetTitle(event){    
    event.currentTarget.innerText = 'Mon ancien titre'
}



//EX4
//évènement qui permet de faire bouger le bouton si l'input est vide
document.getElementById('submitName').addEventListener('mouseenter', function(){

    let button = document.getElementById('submitName')
   
   //teste si la valeur contenu dans l'input
    if(!document.getElementById('name').value){
        button.style.display = 'block'
        button.style.marginTop = Math.random() * 500 + 'px'
        button.style.marginLeft = Math.random() * 500 + 'px'
    }

})

//évènement qui permet de remettre le bouton à sa place
document.getElementById('name').addEventListener('input', function(){
    let button = document.getElementById('submitName')
    button.style.display = 'inline-block'
    button.style.marginTop = '0px'
    button.style.marginLeft = '0px'
})
