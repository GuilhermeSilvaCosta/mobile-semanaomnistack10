import socketio from 'socket.io-client';

const socket = socketio('https://potfolio.redirectme.net', {
    autoConnect: false,
    path: '/week10socket'
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

    socket.on('connect_error', error => { console.log(error.message)})

    socket.on('connect', () => {
        console.log('sucesso amiguinho');
    });
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