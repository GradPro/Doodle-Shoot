# -*- coding: UTF-8 -*-
from wsgi import app
import gevent.monkey
# 安裝gevent到標準函式庫
gevent.monkey.patch_all()

#from socketio.handler import SocketIOHandler
from socketio.server import SocketIOServer



if __name__ == '__main__':
    http_server = SocketIOServer(('0.0.0.0',8080), app, namespace='socket.io', ).serve_forever()
