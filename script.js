/*
// PROJECT SHOWCASE ON HOME-PAGE
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {showSlides(slideIndex += n);}
// Thumbnail image controls
function currentSlide(n) {showSlides(slideIndex = n);}
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");let i;
  let captionText = document.getElementById("caption");
  if (n>slides.length){slideIndex=1}
  if (n<1){slideIndex=slides.length}
  for (i=0;i<slides.length;i++){slides[i].style.display="none";}
  for (i=0;i<dots.length;i++){
  dots[i].className=dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


*/


/*	 TOGGLE DARK THEME	*/
const body = document.querySelector("body");
const hr1 = document.querySelector(".hr1");
const navBar = document.querySelector(".navBar");
const headerText = document.querySelector(".headerText");
let darkTheme = false;
function toggleTheme() {
	if (darkTheme==false){
		body.classList.add("bodyDark");
		body.classList.remove("bodyLight");
		hr1.classList.add("hr1Dark");
		hr1.classList.remove("hr1Light");
		navBar.classList.add("navBarDark");
		navBar.classList.remove("navBarLight");
		headerText.classList.add("headerTextDark");
		headerText.classList.remove("headerTextLight");
		darkTheme=true;
	}
	else{
		body.classList.remove("bodyDark");
		body.classList.add("bodyLight");
		hr1.classList.remove("hr1Dark");
		hr1.classList.add("hr1Light");
		navBar.classList.remove("navBarDark");
		navBar.classList.add("navBarLight");
		headerText.classList.remove("headerTextDark");
		headerText.classList.add("headerTextLight");
		darkTheme=false;
	}
}