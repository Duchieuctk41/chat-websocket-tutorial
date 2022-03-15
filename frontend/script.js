let username = ""
let conButton = document.getElementById('connect')
let inputUsername = document.getElementById('username')
let formulario = document.getElementById('chat-form')
let socket

formulario?.addEventListener('submit', (event) => {
    event.preventDefault()

    const data = {
        sender_username:username,
        target_username:formulario.target.value,
        body:formulario.message.value
    }
    console.log("-> ", data)
    socket.send(JSON.stringify(data))
})

conButton?.addEventListener('click', ()=> {

    username = inputUsername?.value
    socket = new WebSocket(`ws://localhost:8080/chat?username=${username}`)

    // listen for messages
    socket.addEventListener('message', function (event) {
        console.log("Message from server: ", JSON.parse(event.data))
    })
    
})

