var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/',function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

io.on('connection',function (socket) {
    console.log('Client connected');
    socket.on('suhu',function (data) {
        /*console.log(data);*/
        socket.broadcast.emit('suhuku', data);
    });
    socket.on('disconnect',function () {
        /*console.log('Client dicconnected');*/
    });
});

http.listen(80);
// http.listen(3000,function () {
//     console.log('App start on port 3000');
// });