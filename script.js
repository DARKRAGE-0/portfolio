const msg1 = document.querySelector(".msg1");
const tag1 = document.querySelector(".tag1");
const hr2 = document.querySelector(".hr2");
const hr3 = document.querySelector(".hr3");
function size() {
tag1.style.top = msg1.offsetTop-tag1.offsetHeight+"px";
tag1.style.left = msg1.offsetLeft-msg1.offsetWidth/2+"px";
hr2.style.top = tag1.offsetTop-tag1.offsetHeight+"px";
hr3.style.top = msg1.offsetTop+msg1.offsetHeight+"px";
}
size();



/*	 TOGGLE DARK THEME	*/
const body = document.querySelector("body");
const hr1 = document.querySelector(".hr1");
const navBar = document.querySelector(".navBar");
const headerText = document.querySelector(".headerText");
let darkTheme = true;
function toggleTheme() {
	if (darkTheme==false){
		body.classList.add("bodyDark");
		body.classList.remove("bodyLight");
		hr1.classList.add("hrDark");
		hr1.classList.remove("hrLight");
		hr2.classList.add("hrDark");
		hr2.classList.remove("hrLight");
		msg1.classList.add("msg1Dark");
		msg1.classList.remove("msg1Light");
		tag1.classList.add("tag1Dark");
		tag1.classList.remove("tag1Light");
		navBar.classList.add("navBarDark");
		navBar.classList.remove("navBarLight");
		headerText.classList.add("headerTextDark");
		headerText.classList.remove("headerTextLight");
		darkTheme=true;
	}
	else{
		body.classList.remove("bodyDark");
		body.classList.add("bodyLight");
		hr1.classList.remove("hrDark");
		hr1.classList.add("hrLight");
		hr2.classList.remove("hrDark");
		hr2.classList.add("hrLight");
		tag1.classList.remove("tag1Dark");
		tag1.classList.add("tag1Light");
		msg1.classList.remove("msg1Dark");
		msg1.classList.add("msg1Light");
		navBar.classList.remove("navBarDark");
		navBar.classList.add("navBarLight");
		headerText.classList.remove("headerTextDark");
		headerText.classList.add("headerTextLight");
		darkTheme=false;
	}
}
toggleTheme();