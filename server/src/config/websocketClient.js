var W3CWebSocket = require('websocket').w3cwebsocket;
 
var client;

function wsconnect() {
    client = new W3CWebSocket('ws://localhost:8080', 'echo-protocol');
    client.onerror = function() {
        console.log('Connection Error');
    };
     
    client.onopen = function() {
        console.log('WebSocket Client Connected');
    };
     
    client.onclose = function() {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.');
        setTimeout(function() {
          wsconnect();
        }, 1000);
    };
     
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };
}

exports.connect = () => {
    wsconnect();
}

exports.sendMessage = (j) => {
    if (client.readyState == client.OPEN)
    {
        client.send(JSON.stringify(j));
        return true;
    } else {
        return false;
    }
}