let buttonLearnMore = document.querySelector(".buttonLearnMore");
let heading = document.querySelector(".heading");
let headingDesign = document.querySelector(".headingDesign");
let hr = document.querySelector(".hr");
document.onload=buttonLearnMoreSize;

function buttonLearnMoreSize() {
	buttonLearnMore.style.top=heading.offsetTop+heading.offsetHeight/2+"px	buttonLearnMore.style.left=heading.offsetLeft+heading.offsetWidth/2+"px";
	hr.style.top=buttonLearnMore.offsetTop+(buttonLearnMore.offsetHeight*2.8)+"px";
	footer.style.top=document.body.offsetHeight-footer.offsetHeight+"px";
	headingDesign.style.height=heading.offsetHeight*1.457+"px";
	headingDesign.style.top=heading.offsetTop+"px";
	if (window.innerWidth>500) {
	project2txt.style.top=project2.offsetTop+project2.offsetWidth+projectPanel.offsetTop-1+"px";
	project2txt.style.left=projectPanel.offsetLeft+project2.offsetLeft-250+"px";
	project1txt.style.top=project1.offsetTop+project1.offsetWidth+projectPanel.offsetTop-1+"px";
	project1txt.style.left=projectPanel.offsetLeft-projectPanel.offsetWidth+260+"px";
	}
else if (window.innerWidth<=500) {
	project2txt.style.top=project2.offsetTop+project2.offsetWidth+projectPanel.offsetTop-1+"px";
	project2txt.style.left=projectPanel.offsetLeft+project2.offsetLeft-150+"px";
	project1txt.style.top=project1.offsetTop+project1.offsetWidth+projectPanel.offsetTop-1+"px";
	project1txt.style.left=projectPanel.offsetLeft-projectPanel.offsetWidth+160+"px";
	}

}

buttonLearnMoreSize();