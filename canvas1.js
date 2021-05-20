const canvas = document.querySelector('.canvas1');
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width = window.innerWidth;
const canvasHeight = canvas.height = window.innerHeight;
let x = 100;
let y = 100;
let speed = 3;
function balls() {
	ctx.beginPath();
	ctx.fillStyle = 'red';
	ctx.arc(x,y,10,0,Math.PI*2);
	ctx.fill();
	y+=speed;
	x-=speed-2;
}

function animate() {
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	handleParticles();
	requestAnimationFrame(animate);
}



animate();