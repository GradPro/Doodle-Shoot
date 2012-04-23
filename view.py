from socketio.namespace import BaseNamespace
from socketio.mixins import BroadcastMixin
from socketio import socketio_manage
from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
def index():
    print '/////////////////////////////////'
    return render_template('game.html')


class EventIONamespace(BaseNamespace, BroadcastMixin):
    def on_keyEvent(self, *args): 
        print str(args) 
        self.broadcast_event('keyEvent', *args)
        
        
nsmap = {'/event': EventIONamespace}

@app.route('/socket.io/<path:io_path>')
def socketio_service(io_path):
    retval = socketio_manage(request.environ, nsmap,request)
    #return Response(retval)