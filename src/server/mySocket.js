import io from 'socket.io-client';

//[1] for local debuging and hosting (build mode too!)
const mySocket = io.connect('http://localhost:8000');

//[2] for heroku
//const mySocket = io.connect();

export { mySocket as default }
