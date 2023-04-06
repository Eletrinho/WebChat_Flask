from flask import Flask
import flask_monitoringdashboard as dashboard
from flask_socketio import SocketIO


app = Flask(__name__)
app.config.from_object('config')
socketio = SocketIO(app)
dashboard.bind(app)

from app.controllers import default