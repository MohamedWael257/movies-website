function scrollWin()
{
  window.scrollTo(0,1600);
}
function scrollWin2()
{
  window.scrollTo(0,3500);
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

slideLeft();
slideRight();

window.onload=setWidth;
////////////////header gallary/////////////
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
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
    document.getElementById("demo").innerHTML = "You Can now visit these movies ";
    document.getElementById("demo").style.fontSize = "12px"
    var classList=['section1','section2','section3','section4'];
    radomkey=Math.floor(Math.random()*classList.length);
    document.body.setAttribute('class',classList[radomkey]);
  }
}, 1000);