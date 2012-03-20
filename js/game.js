var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||  
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(fn){ setTimeout(fn, 1000/60); };

var game = {};
