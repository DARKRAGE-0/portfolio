const mailBoxDiv = document.querySelector('.mailBoxDiv');
const submitBut = document.querySelector('.submitBut');
const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext("2d");
let canvasWidth;
let canvasHeight;
function canvasSize() {
canvasWidth = canvas.width = window.innerWidth;
canvasHeight = canvas.height = window.innerHeight;
canvas.style.height = window.innerHeight + "px";
canvas.style.width = window.innerWidth + "px";
if (window.innerWidth<450){submitBut.innerHTML = 'Send'}
else{submitBut.innerHTML = 'Send &#9993'}
}
canvasSize();
let hue = 0;
let hue$ = 0;

function animate() {
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	handleParticles();
	line();
	hue+=10;
	hue$+=2;
	mailBoxDiv.style.color = 'hsl('+hue$+',50%,50%)';
	submitBut.style.backgroundColor = 'hsl('+hue$+',50%,50%)';
	mailBoxDiv.style.borderColor = 'hsl('+hue$+',50%,50%)';
	requestAnimationFrame(animate);
}
animate();