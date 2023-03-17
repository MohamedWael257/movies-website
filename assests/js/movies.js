var header=document.getElementsByTagName("header");
window.onscroll=function(){scrollfunction()};
function scrollfunction(){
  if(document.body.scrollTop>80 || document.documentElement.scrollTop>80)
  {
    header[0].setAttribute("class","header-scroll");
  }
  else{
    header[0].removeAttribute("class")
  }
}
//////////////////////////////////
function scrollWin()
{
  window.scrollTo(0,1600);
}
function scrollWin2()
{
  window.scrollTo(0,3500);
}
function show(){
  var sh=document.getElementById("move")
  sh.style.marginTop="300px"
}
function hide(){
  var sh=document.getElementById("move")
  sh.style.marginTop="0"
}

////////////////slider gallary/////////////
var right = 0;
var maxMargin;
var jumpMargin = 150;
var jumpMargin2 = 50;

function setWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".flt-leftt").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll(".flt-leftt")[0].style.height = displayheight+"px";
  document.querySelectorAll(".flt-leftt")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
  /////////////////////////////////////////////////////////////////////////////
  
}

function slideLeft(event){
  var rowcont = document.querySelector(".row-container");
  var rowcont2 = document.querySelector(".row-container2")
  var rowcont3 = document.querySelector(".row-container3");
  var rowcont4 = document.querySelector(".row-container4");
  if(right <= -maxMargin){
    event.preventDefault();
  }
  else{
    right -= jumpMargin;
  }
   rowcont.style.marginLeft = right+"px";
   rowcont2.style.marginLeft = right+"px";
   rowcont3.style.marginLeft = right+"px";
   rowcont4.style.marginLeft = right+"px";

}

function slideRight(event){
  var rowcont = document.querySelector(".row-container");
  var rowcont2 = document.querySelector(".row-container2");
  var rowcont3 = document.querySelector(".row-container3");
  var rowcont4 = document.querySelector(".row-container4");
  if(right==0){
    event.preventDefault();
  }
  else if(right >= maxMargin){
    event.preventDefault();
  }
  else{
     right += jumpMargin;
  }
  rowcont.style.marginLeft = right+"px";
  rowcont2.style.marginLeft = right+"px";
  rowcont3.style.marginLeft = right+"px";
  rowcont4.style.marginLeft = right+"px";

}

// slideLeft();
// slideRight();

window.onload=setWidth;
////////////////header gallary/////////////
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for ( i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" activity", "");
    }  
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activity";
    setTimeout(showSlides, 2500);
    
}
//////////////////////////////////////////
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});
// var classList=['section1','section2','section3','section4'];
// radomkey=Math.floor(Math.random()*classList.length);
// document.body.setAttribute('class',classList[radomkey])

// console.log(radomkey);

// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2023 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.querySelector(".days").innerHTML=days;
  document.querySelector(".hours").innerHTML=hours;
  document.querySelector(".minutes").innerHTML=minutes;
  document.querySelector(".seconds").innerHTML=seconds;

    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "You can now visit movies";
    document.getElementById("demo").style.fontSize = "10px";
    var classList=['section1','section2','section3','section4'];
    radomkey=Math.floor(Math.random()*classList.length);
    document.body.setAttribute('class',classList[radomkey]);
  }
}, 1000);

// const cube=document.querySelector('.cube');
// const cube1=document.querySelector('.cube1');
// const cube2=document.querySelector('.cube2');
// const cube3=document.querySelector('.cube3');
// const cube4=document.querySelector('.cube4');
// const cube5=document.querySelector('.cube5');
// const cube6=document.querySelector('.cube6');
// const cube7=document.querySelector('.cube7');
// cube.addEventListener('click',()=>
// {
//     cube.classList.add('active');
//     cube1.classList.remove('active');
//     cube2.classList.remove('active');
//     cube3.classList.remove('active');
//     cube4.classList.remove('active');
//     cube5.classList.remove('active');
//     cube6.classList.remove('active');
//     cube7.classList.remove('active');
// });
// cube1.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.add('active');
//   cube2.classList.remove('active');
//   cube3.classList.remove('active');
//   cube4.classList.remove('active');
//   cube5.classList.remove('active');
//   cube6.classList.remove('active');
//   cube7.classList.remove('active');
// });
// cube2.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.add('active');
//   cube3.classList.remove('active');
//   cube4.classList.remove('active');
//   cube5.classList.remove('active');
//   cube6.classList.remove('active');
//   cube7.classList.remove('active');
// });
// cube3.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.remove('active');
//   cube3.classList.add('active');
//   cube4.classList.remove('active');
//   cube5.classList.remove('active');
//   cube6.classList.remove('active');
//   cube7.classList.remove('active');
// });
// cube4.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.remove('active');
//   cube3.classList.remove('active');
//   cube4.classList.add('active');
//   cube5.classList.remove('active');
//   cube6.classList.remove('active');
//   cube7.classList.remove('active');
// });
// cube5.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.remove('active');
//   cube3.classList.remove('active');
//   cube4.classList.remove('active');
//   cube5.classList.add('active');
//   cube6.classList.remove('active');
//   cube7.classList.remove('active');
// });
// cube6.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.remove('active');
//   cube3.classList.remove('active');
//   cube4.classList.remove('active');
//   cube5.classList.remove('active');
//   cube6.classList.add('active');
//   cube7.classList.remove('active');
// });
// cube7.addEventListener('click',()=>
// {
//   cube.classList.remove('active');
//   cube1.classList.remove('active');
//   cube2.classList.remove('active');
//   cube3.classList.remove('active');
//   cube4.classList.remove('active');
//   cube5.classList.remove('active');
//   cube6.classList.remove('active');
//   cube7.classList.add('active');
// });
// document.getElementById('videoo').currentTime=0;