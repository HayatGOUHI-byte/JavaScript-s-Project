/*******************autre methode de se faire************************ */

const question = document.querySelectorAll(".question");

question.forEach(function(){


  const btn = question.querySelector('question-btn');
  console.log(btn);



})

/************************* */
//  const btns = document.querySelectorAll(".question-btn");

//  btns.forEach(function(btn){
//         btn.addEventListener("click",function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");

//       })
//  })


