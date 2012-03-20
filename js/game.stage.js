(function(){
	game.Stage = Class.$extend({
		__init__: function(){
			this.canvas = new game.Canvas(cfg.stage.width, cfg.stage.height);
			this.items = [];
			game.activeStage = this;
		},

		addItem: function(item){
			this.items.push(item);
		},

		show: function(target){
			this.canvas.$.css({'background-image': 'url(' + cfg.stage.bg + ')'});
			this.canvas.attach(target);
			requestAnimationFrame(function(t){
				var stage = game.activeStage;
				$.each(stage.items, function(i,obj){ obj.draw(stage.canvas.ctx); });
				requestAnimationFrame(arguments.callee);
			});
		}
	});
})();
