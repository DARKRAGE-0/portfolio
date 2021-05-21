let ballsArray = [];

class Balls{
	constructor(){
		this.x = Math.floor(Math.random() * (canvasWidth+canvasHeight));
		this.y = 0 - 10;
		this.size = 10;
		this.speedY = (Math.random() * 5) + 3;
		this.color = 'hsl('+hue+',50%,50%)';
	}
	update(){
		this.x -= this.speedY/2;
		this.y += this.speedY;
	}
	draw(){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		//ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
		ctx.fillRect(this.x,this.y,this.size,this.size);
		ctx.fill();
	}
}

function handleParticles() {

	ballsArray.unshift(new Balls);
	for (var i=0;i<ballsArray.length; i++) {
		ballsArray[i].update();
		ballsArray[i].draw();
	}
	if (ballsArray.length>500) {
		for (var i = 0; i < ballsArray.length; i++) {
			ballsArray.pop(ballsArray[i]);
		}
	}
}


function line() {
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,canvasHeight);
	ctx.moveTo(canvasWidth,0);
	ctx.lineTo(canvasWidth,canvasHeight);
	ctx.strokeStyle='hsl('+hue$+',50%,50%)';
	ctx.lineWidth = 2;
	ctx.stroke();
}