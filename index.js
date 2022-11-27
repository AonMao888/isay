const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static(__dirname+'/public'))

const server = app.listen(1010,()=>{
    console.log("server started with port 1010")
})
const io = socket(server);
io.on('connection',(socket)=>{
    socket.on("send",(data)=>{
        io.sockets.emit('send',data);
    })
})