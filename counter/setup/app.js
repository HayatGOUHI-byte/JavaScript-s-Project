//here javaScript


const val = document.querySelector("#value");
const btnDecrease = document.getElementById("decrease");
const btnIncrease = document.getElementById("increase");
const btnReset = document.getElementById("reset");

let valeur = val.textContent;
//Increase Button
btnIncrease.addEventListener("click",function(){
    valeur ++;
    val.textContent = valeur;
    colorChange();
});

//Decrease Buuton function
btnDecrease.addEventListener("click",function(){
    valeur -- ;
    val.textContent = valeur;
    colorChange();
});


//funtion to reset to 0

btnReset.addEventListener("click",function(){
    valeur = 0;
    val.textContent = valeur;
    colorChange();
});



//function to change color of value Number

function colorChange (){
    if(valeur>0)
    val.style.color = 'green';
    else if(valeur<0)
    val.style.color='red';
    else if( valeur === 0)
    val.style.color='black';

}