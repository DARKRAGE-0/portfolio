
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