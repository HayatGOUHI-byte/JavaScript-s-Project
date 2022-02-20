
const reviews = [
  {
    id:1,
    name: "susan Smith",
    job: "web developer",
    info: "je suis passionné par le développement",
    img:"./dua lipa.jfif",
  },
  {
    id:2,
    name: "Kim Sanya",
    job: "back-end developer",
    info: "I'm passionnate about developement tools",
    img: "./shawn.jfif",
  },
  {
    id:3,
    name: "susan Smith",
    job: "web developer",
    info: "je suis passionné par le développement",
    img:"./hailee.jfif",
  },
  {
    id:4,
    name: "Kim Sanya",
    job: "back-end developer",
    info: "I'm passionnate about developement tools",
    img: "./person-1.jpeg",
  }
];


//current profile

let currentItem = 0;


const btnNext = document.querySelector(".next-btn");
const btnPrev = document.querySelector(".prev-btn");

const image = document.getElementById("person-img");
const getInfo = document.getElementById("info");
const getJob = document.getElementById("job");
const getAuthor = document.getElementById("author");

// get button surprise Me

const buttonSurprise = document.querySelector(".random-btn");

//surprise Me
buttonSurprise.addEventListener("click",function(){
 RandomNumber();

});


//RandomNumber 

function RandomNumber (){
  const NumberR = Math.floor(Math.random() * reviews.length);
  currentItem = NumberR;
  person(currentItem);
}

btnNext
btnNext.addEventListener("click",function(){
   currentItem = currentItem+1;
   person(currentItem);

});

btnPrev
btnPrev.addEventListener("click",function(){
  currentItem = currentItem+-1;
  person(currentItem);

});

window.addEventListener("DOMContentLoaded",function(){
  currentItem++;
 person(currentItem);
})

function person(currentItem){
  const item = reviews[currentItem];
  image.src= item.img;
  getInfo.innerHTML = item.info;
  getJob.innerHTML = item.job;
  getAuthor.innerHTML = item.name;
 }