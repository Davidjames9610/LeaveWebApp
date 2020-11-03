const express = require('express');
const path = require('path');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});


io.on('connection', (socket) => {
    const id = socket.id;
    socket.emit('user', { data: id });

    console.log('a user connected with id:', id);
    socket.on("disconnect", () => console.log("Client with id:", id, "disconnected"));

});

http.listen(port, () => console.log(`Listening on port ${port}`));
