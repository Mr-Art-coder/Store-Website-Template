//fix the navbar to stick to the top
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100) {
            $('nav').addClass('navbar-fixed-top');
        }
        else {
            $('nav').removeClass('navbar-fixed-top');
        }
    });
}
);

//highlight the navigation menu for the current page
$(document).ready(function(){
    var url = window.location;
    $('nav a[href="'+ url +'"]').parent().addClass('active');
    $('nav a').filter(function(){
        return this.href == url;
    }).parent().addClass('active');
}
);


var dropnav=document.getElementById("dropitn");
var movement=document.getElementById("automation");

dropnav.onclick=function() {
    movement.style.marginTop="200px"
};

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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}