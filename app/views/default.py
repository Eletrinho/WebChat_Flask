from app import app, socketio
from flask import render_template
from flask_socketio import emit, join_room, leave_room, send

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def handle_message(data):
    print(f'received message:  {data}')

@socketio.on('sendMsg')
def send_message(mensagem):
    print(mensagem)
    room = mensagem['room']
    emit('recieve msg', mensagem, to=room)

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(f'{username} entrou na sala', to=room)
    print(f'{username} entrou na sala {room}')

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(f'{username} saiu da sala', to=room)
    print(f'{username} saiu da sala {room}')