const express = require('express');
const path = require('path');
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


const port = process.env.PORT || 8000;

const rooms = {};

app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

//define some functions for use later...

/**
 * Will connect a socket to a specified room
 * @param socket A connected socket.io socket
 * @param room An object that represents a room from the `rooms` instance variable object
 */
const joinRoom = (socket, room) => {
    room.sockets.push(socket);
    socket.join(room.id, () => {
        // store the room id in the socket for future use
        socket.roomId = room.id;
        console.log(socket.id, "Joined", room.id);
    });
};

/**
 * Will make the socket leave any rooms that it is a part of
 * @param socket A connected socket.io socket
 */
const leaveRooms = (socket) => {
    const roomsToDelete = [];
    for (const id in rooms) {
        const room = rooms[id];
        // check to see if the socket is in the current room
        if (room.sockets.includes(socket)) {
            socket.leave(id);
            // remove the socket from the room object
            room.sockets = room.sockets.filter((item) => item !== socket);
        }
        // Prepare to delete any rooms that are now empty
        if (room.sockets.length == 0) {
            roomsToDelete.push(room);
        }
    }

    // Delete all the empty rooms that we found earlier
    for (const room of roomsToDelete) {
        delete rooms[room.id];
    }
};




io.on('connection', (socket) => {
    const id = socket.id;
    socket.emit('user', { data: id });
    console.log('a user connected with id:', id);
    socket.on("disconnect", () => console.log("Client with id:", id, "disconnected"));





});

http.listen(port, () => console.log(`Listening on port ${port}`));
