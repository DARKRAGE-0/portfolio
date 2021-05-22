const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width = window.innerWidth-20;
const canvasHeight = canvas.height = window.innerHeight;
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