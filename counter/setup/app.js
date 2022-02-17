//here javaScript

const val = document.querySelector("#value");

let valeur = val.textContent;

//function to change color of value Number

function colorChange (){
    if(valeur>0)
    val.style.color = 'green';
    else if(valeur<0)
    val.style.color='red';
    else if( valeur === 0)
    val.style.color='black';

}

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            valeur--;
            val.textContent = valeur;
            colorChange();
        }else if(styles.contains("increase")){
            valeur++;
            val.textContent = valeur;
            colorChange();
        }else{
            valeur = 0;
            val.textContent = valeur;
        }
        })
})

