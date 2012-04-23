(function(){
	game.Player = Class.$extend({
		__init__: function(){
			this.img = new Image();
			this.img.src = cfg.player.img;
			var me = this;
			this.img.onload = function(){
				me.canvas = new game.Canvas(this.width, this.height, this);
			};
		},

		pos: function(coord_or_x, y){
			if (coord_or_x){
				if (y){
					this._x = coord_or_x;
					this._y = y;
				}
				else{
					this._x = coord_or_x.x;
					this._y = coord_or_x.y;
				}
				return this;
			}
			else
				return {x: this._x, y: this._y};
		},

		draw: function(ctx){
			if (this.canvas){
				ctx.drawImage(this.canvas.cvs, this._x, this._y);
			}
		}
	});
})();
