const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext("2d");
let canvasWidth;
let canvasHeight;
function canvasSize() {
canvasWidth = canvas.width = window.innerWidth;
canvasHeight = canvas.height = window.innerHeight;
canvas.style.height = window.innerHeight + "px";
canvas.style.width = window.innerWidth + "px";
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
	requestAnimationFrame(animate);
}
animate();
