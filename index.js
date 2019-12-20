var Stomp = require('stomp-client');

var queue = '/exchange/websocket-direct';
var url = 'ws://localhost';
var port = '15674';

var client = new Stomp(
    url, 
    port, 
    'admin',
    'nimda'
);

client.connect(function(sessionId) {
    client.subscribe(queue, function(body, headers) {
      console.log('This is the body of a message on the subscribed queue:', body);
    });

    // client.publish(queue, 'Oh herrow');
});
