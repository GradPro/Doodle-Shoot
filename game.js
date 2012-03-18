//Dom Ready
//宣告背景Canvas
$(function draw() {
	var bg = document.getElementById("bg");
	var ctx = bg.getContext("2d");
	ctx.fillStyle = "black";
	ctx.fillRect (0, 0, 2500, 2500);
});

$(function draw() {
	var player = document.getElementById("player");
	var ctx = player.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(25,0);
	ctx.lineTo(0,50);
	ctx.lineTo(50,50);
	ctx.fillStyle = 'rgb(192, 80, 77)';
	ctx.fill();
});

