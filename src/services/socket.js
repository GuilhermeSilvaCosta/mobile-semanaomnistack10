import socketio from 'socket.io-client';

//'https://potfolio.redirectme.net/week10'

const socket = socketio('http://localhost:3334', {
    autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction)
}

function connect(latitude, longitude, techs) {

    socket.io.opts.query = {
        latitude, longitude, techs
    };

    socket.connect();

    socket.on('message', text => {
        console.log(text);
    })
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs
}