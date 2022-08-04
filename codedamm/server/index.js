const websocket = require('ws');

const wss = new websocket.Server({
    port:9876
}, function(){
    console.log("socket is ready")
});

wss.on('connection', function(ws){
    //ws.send("hlw from server")
    ws.on('message', function(data){
        ws.send(data)
    })
})
