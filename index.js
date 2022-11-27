const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static(__dirname+'/public'))

const server = app.listen(process.env.PORT || 80,()=>{
    console.log("server started with port 80")
})
const io = socket(server);
io.on('connection',(socket)=>{
    socket.on("send",(data)=>{
        io.sockets.emit('send',data);
    })
})