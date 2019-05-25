const express = require('express');
const socket = require('socket.io');
const app = express();
const port = 3001;

//
//
const server = app.listen(port,()=>{
  console.log(`Server kör på http://localhost:${server.address().port}`);
});


// app.get('/',(req,res)=>{
//   res.send('server kommunikation is going on')
// });
/*med use använder man ett external dokument*/
app.use(express.static('./public'));
let io = socket(server);
/*varje gång som man gör en connection ,socket skapas en ny id*/
io.on('connection',(socket)=>{
  console.log('det finns en connection i',socket.id);
  // recieving msg and dela till alla
  socket.on('chat',function(data){
    console.log(data);
    io.sockets.emit('chat',data);
  });
  socket.on('typing',function(data){
    socket.broadcast.emit('typing',data);

  })

});
