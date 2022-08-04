const websocket = require("ws");

const wss = new websocket.Server({ port:8082 })

wss.on("connection", ws => {
    console.log("New Client connected!");

    ws.on("close", () =>{
        console.log("client has disconnected");
    })

})