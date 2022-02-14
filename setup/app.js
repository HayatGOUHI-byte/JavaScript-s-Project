const colors = ["#bbff99", "#ff8566", "#6666ff", "#ffff33", "#b366ff"];//array

const btn = document.getElementById("btn");

const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    try{
        const colorRecup = colors[Math.floor(Math.random() * colors.length )];
        color.textContent = colorRecup ;
        document.body.style.background = colorRecup;
    }catch(err){
        console.log(err);
    }finally{
        console.log(document.body);
    }
  
})
