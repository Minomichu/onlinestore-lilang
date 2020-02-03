if(window.location.href === "http://mimmimi.com/Bildbehandling/lilang" || window.location.href === "http://mimmimi.com/Bildbehandling/lilang/index.html" || window.location.href === "http://mimmimi.com/Bildbehandling/lilang/" || window.location.href === "http://localhost:3000/index.html") {

var slideIndex = 0;

//Slideshow under "Om oss" på startsidan
function showSlideshow() {
  var i;
  var slideshow = document.getElementsByClassName("slider");

  
  for (i = 0; i < slideshow.length; i++) {
    slideshow[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slideshow.length) {slideIndex = 1}    
  slideshow[slideIndex-1].style.display = "block";
  
  //1000 = 1 sekund
  setTimeout(showSlideshow, 4000);
}

showSlideshow();


}