var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');

});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Roger',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta Server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})