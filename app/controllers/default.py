from app import app, socketio
from flask import render_template
from flask_socketio import emit, join_room, leave_room

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('my event')
def handle_message(data):
    print(f'received message:  {data}')

@socketio.on('sendMsg')
def send_message(mensagem):
    print(mensagem)
    emit('recieve msg', mensagem, broadcast=True)

# join_room e leave_room