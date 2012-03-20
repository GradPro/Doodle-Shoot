(function(){
	var Node = Class.$extend({
/*
	把 DOM 和 jQuery 物件包裝在一起
	Node().$ 是 jQuery 物件
	Node().dom 是 DOM 物件
*/
		__init__ : function(node){
			var $;
			if (node instanceof jQuery)
				$ = node;
			else
				$ = jQuery(node);

			if ($.length == 1)
				this.$ = $;
			else
				throw "超過一個物件或沒有物件";

			this.dom = this.$[0];
			// 從有無 parent 就可判斷出是否已經掛上 DOM tree
			this.attached = !!this.$.parent().length;
		},
		// 掛到某個 DOM 之下
		attach: function(parent){
			// 沒指定的話就是掛到 <body> 下面
			if (!parent) parent = 'body';
			if (!this.attached){
				this.$.appendTo(parent);
				this.attached = !!this.$.parent().length;
			}
			return this;
		},
		// 拔下
		detach: function(){
			if (this.attached){
				this.$.detach();
				this.attached = !!this.$.parent().length;
			}
			return this;
		}
	});

	game.Canvas = Node.$extend({
    	__init__: function(width, height, img){
    		this.cvs = document.createElement('canvas');
    		this.size(width, height);
    		this.$super(this.cvs);
    		this.ctx_2d = this.cvs.getContext('2d');
    		if (img) this.draw(img);
    		this.ctx = this.ctx_2d;
    	},

    	size: function(width, height){
    		if (width && height){
    			this.cvs.width = width;
    			this.cvs.height = height;
    			return this;
    		}
    		else
    			return {w: this.cvs.width, h: this.cvs.height};
    	},

    	draw: function(img){
    		this.ctx_2d.drawImage(img,0,0);
    	}
    });
})();
