//Q1


let targetButton = document.querySelector("#btn-visibilite-password");
let targetEye = document.querySelector("#oeil");
let isOpen = false;

targetButton.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true
    targetEye.setAttribute("src", "./images/eye-close.png");
    document.querySelector("#mdp").setAttribute('type', 'text');
  }
  else {
    isOpen = false
    targetEye.setAttribute("src", "./images/eye-open.png");
    document.querySelector("#mdp").setAttribute('type', 'password');
  }
});

//Q2

