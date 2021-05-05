let buttonLearnMore = document.querySelector(".buttonLearnMore");
let heading = document.querySelector(".heading");
let headingDesign = document.querySelector(".headingDesign");
let project1txt = document.querySelector(".project1txt");
let project2txt = document.querySelector(".project2txt");
let projectPanel = document.querySelector(".projectPanel");
let project1 = document.querySelector(".project1");
let project2 = document.querySelector(".project2");
let footer = document.querySelector(".footer");
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

function project1txtUp() {
	project1txt.style.transform="translateY(-15px)";
	project1.style.transform="translateY(-15px)";
	project1.style.boxShadow="10px 5px 20px gray";
	if(window.innerWidth>500){project1txt.style.height=theHeight1+"px";}
	if(window.innerWidth<=500){project1txt.style.height=theHeight2+"px";}
	if(window.innerWidth>500){project1txt.style.top=theTop1+"px";}
	if(window.innerWidth<=500){project1txt.style.top=theTop2+"px";}
	project1.style.filter="grayscale(140%)";
}
function project1txtOut() {
	project1txt.style.transform="translateY(0)";
	project1.style.transform="translateY(0)";
	project1.style.boxShadow="5px 5px 5px gray";
	if (window.innerWidth>500){project1txt.style.height=110+"px";} 
	else if (window.innerWidth<=500){project1txt.style.height=80+"px";} 
	project1.style.filter="none";
	buttonLearnMoreSize();
}
function project2txtUp() {
	project2txt.style.transform="translateY(-15px)";
	project2.style.transform="translateY(-15px)";
	project2.style.boxShadow="10px 5px 20px gray";
	if(window.innerWidth>500){project2txt.style.height=theHeight1+"px";}
	if(window.innerWidth<=500){project2txt.style.height=theHeight2+"px";}
	if(window.innerWidth>500){project2txt.style.top=theTop1+"px";}
	if(window.innerWidth<=500){project2txt.style.top=theTop2+"px";}
	project2.style.filter="grayscale(140%)";
}
function project2txtOut() {
	project2txt.style.transform="translateY(0)";
	project2.style.transform="translateY(0)";
	project2.style.boxShadow="5px 5px 5px gray";
	if (window.innerWidth>500){project2txt.style.height=110+"px";} 
	else if (window.innerWidth<=500){project2txt.style.height=80+"px";} 
	project2.style.filter="none";
	buttonLearnMoreSize();
}
buttonLearnMoreSize();
let theHeight1 = project1txt.offsetHeight*2.5;
let theTop1 = project1txt.offsetTop-project1txt.offsetHeight*1.5;
let theHeight2 = project1txt.offsetHeight*2;
let theTop2 = project1txt.offsetTop-project1txt.offsetHeight*1;