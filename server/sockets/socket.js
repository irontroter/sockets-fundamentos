const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a esta aplicación'
    })


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'todo salió bién!'
        //     });

        // } else {
        //     callback({
        //         resp: 'todo salió mal!!!!!!!'
        //     });


        // }

    })
})