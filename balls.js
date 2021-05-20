let ballsArray = [];

class Balls{
	constructor(){
		this.x = Math.floor(Math.random() * canvasWidth);
		this.y = 0;
		this.size = 7;
		this.speedY = (Math.random() * 10) + 3;
		this.color = '#42484F';
	}
	update(){
		this.y += this.speedY;
	}
	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
		ctx.fill();
	}
}

function handleParticles() {

	ballsArray.unshift(new Balls);
	for (var i=0;i<ballsArray.length; i++) {
		ballsArray[i].update();
		ballsArray[i].draw();
	}
	if (ballsArray.length>300) {
		for (var i = 0; i < ballsArray.length; i++) {
			ballsArray.pop(ballsArray[i]);
		}
	}
}