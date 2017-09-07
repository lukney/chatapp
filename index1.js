var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var qs = require('querystring');
console.log(qs.escape('Hello $ é " \' & ='));
// 'Hello%20%24%20%C3%A9%20%22%20\'%20%26%20%3D'

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3002, function(){
  console.log('listening on *:3002');
});