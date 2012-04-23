(function(){
	jwerty.key('w', function () {socket.emit("keyEvent", {'key': "W"});});
	jwerty.key('s', function () {socket.emit("keyEvent", {'key': "S"});});
	jwerty.key('a', function () {socket.emit("keyEvent", {'key': "A"});});
	jwerty.key('d', function () {socket.emit("keyEvent", {'key': "D"});});
	jwerty.key('↑', function () {socket.emit("keyEvent", {'key': "UP"});});
	jwerty.key('↓', function () {socket.emit("keyEvent", {'key': "DOWN"});});
	jwerty.key('←', function () {socket.emit("keyEvent", {'key': "LEFT"});});
	jwerty.key('→', function () {socket.emit("keyEvent", {'key': "RIGHT"});});
})();
