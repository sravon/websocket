const http = require('http');
const webSocketserver = require("websocket").server
let connection = null;

const httpserver = http.createServer((req, res)=>{
    console.log("we have received a request")
})

const websocket = new webSocketserver({
    "httpServer": httpserver
})

websocket.on("request", request =>{
    connection = request.accept(null, request.origin)
    connection.on("open", () => console.log("Opened!!!"))
    connection.on("close", () => console.log("closed!!!"))
    connection.on("message", message => console.log(`message from ${message.utf8Data}`))
})

httpserver.listen(8080, ()=> console.log("My server is listening at 8080"))