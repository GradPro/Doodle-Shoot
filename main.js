$(function(){
	var stage = new game.Stage();
	var player = new game.Player();

	player.pos(200, 100);
	stage.addItem(player);
	stage.show();

	window.stage = stage;
});
