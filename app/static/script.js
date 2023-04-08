var socket = io();
var username;
var room;

var nickForm = document.querySelector('#nickForm');
nickForm.addEventListener('submit', function(e){
    e.preventDefault();
    sendNick()
})

function sendNick() {
    var nick = document.querySelector("#nick")
    username = document.querySelector("#nick").value
    document.querySelector("#entrar").style.display = "none"
    document.querySelector("#rooms").style.display = "flex"
}

function choiceRoom(roomId) {
    room = roomId
    socket.emit('join', {username: username, room: roomId})
    document.querySelector("#rooms").style.display = "none"
    document.querySelector("#chat").style.display = "flex"
    document.querySelector('#roomNumber').innerHTML = `Sala ${room}`
}

var msgForm = document.querySelector('#msgForm');
msgForm.addEventListener('submit', function(e){
    e.preventDefault();
    enviarmsg()
})

function enviarmsg(){
    var msg = document.querySelector("#msg")
    socket.emit('sendMsg', {user: username, mensagem: msg.value, room: room})
    msg.value = ''
}

socket.on('message', (data) => {
    console.log(data)
})

socket.on('connect', function() {
    socket.send({data: 'A new user as been connected.'});
});

socket.on('recieve msg', function(mensagem) {
    var span = document.createElement('span')
    span.innerHTML = `<strong>${mensagem.user}</strong>: ${mensagem.mensagem}`
    document.querySelector("#mensagens").append(span)
    document.querySelector("#mensagens").scrollBy(0, 200)
})