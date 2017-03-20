var socket = io();

socket.emit('move',{
  x:10,
  y:25,
  speed:1
});

socket.on('movePlayer',function(data) {
  console.log(data);
});

setInterval(function() {
  
},1000/60);
