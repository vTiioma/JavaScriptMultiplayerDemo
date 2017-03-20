const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server,{});

app.get('/',function(req,res) {
  res.sendFile(__dirname+'/client/index.html');
});

app.use('/client',express.static(__dirname+'/client'));

io.sockets.on('connection',function(socket) {
  console.log('socket connection');

  socket.on('move',function(data) {
    console.log(data);

    socket.emit('movePlayer', data);
  });
});

server.listen(3000);
console.log('Server running on port 3000');
