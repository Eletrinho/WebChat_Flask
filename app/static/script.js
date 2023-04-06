var socket = io();
var username = ''

var nickForm = document.querySelector('#nickForm');
nickForm.addEventListener('submit', function(e){
    e.preventDefault();
    sendNick()
})

function sendNick() {
    var nick = document.querySelector("#nick")
    
    if(nick.value == ''){
        document.querySelector('#warn').innerHTML = 'Digite um nick primeiro'
        document.querySelector('#warn').style.backgroundColor = 'red'
    } else {
        username = document.querySelector("#nick").value
        document.querySelector("#entrar").style.display = "none"
        document.querySelector("#chat").style.display = "flex"
    }
}

var msgForm = document.querySelector('#msgForm');
msgForm.addEventListener('submit', function(e){
    e.preventDefault();
    enviarmsg()
})

function enviarmsg(){
    var msg = document.querySelector("#msg")
    socket.emit('sendMsg', {user: username, mensagem: msg.value})
    msg.value = ''
    document.querySelector('#warn').innerHTML = ''
}

socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

socket.on('recieve msg', function(mensagem) {
    var span = document.createElement('span')
    span.innerHTML = `<strong>${mensagem.user}</strong>: ${mensagem.mensagem}`
    document.querySelector("#mensagens").append(span)
    document.querySelector("#mensagens").scrollBy(0, 200)
})