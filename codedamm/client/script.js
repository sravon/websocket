
const ws = new WebSocket(`ws://127.0.0.1:9876`) 
ws.binaryType = 'blob'

const msg = document.getElementById('messages')
const input = document.getElementById('message')
const button = document.getElementById('send')
button.disabled = true
button.addEventListener('click',sendMessage, false)

ws.onopen = function(){
    button.disabled = false
    //ws.send("Hey")
}

ws.onmessage = function(event){
    // const { data } = e;
    // console.log(e)
    // const newmsg = document.createElement('div')
    // newmsg.innerText = `ServerSays: ${data}`
    // console.log(data)
    // msg.appendChild(newmsg)
    if (event.data instanceof Blob) {
        reader = new FileReader();

        reader.onload = () => {
            console.log("if Result: " + reader.result);
        };

        reader.readAsText(event.data);
    } else {
        console.log("else Result: " + event.data);
    }
}

function sendMessage(){
    const text = input.value
    //console.log(text)
    ws.send(text)
}