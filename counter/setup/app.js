//here javaScript


const val = document.querySelector("#value");
const btnDecrease = document.getElementById("decrease");
const btnIncrease = document.getElementById("increase");
const btnReset = document.getElementById("reset");

let valeur = val.textContent;
btnIncrease.addEventListener("click",function(){
    valeur ++;
    console.log(valeur);
});
