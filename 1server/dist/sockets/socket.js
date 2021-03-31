"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurarUsuario = exports.mensaje = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
};
exports.desconectar = desconectar;
const mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        console.log('mesaje recibo', payload);
        io.emit('mensaje-nuevo', payload);
    });
};
exports.mensaje = mensaje;
const configurarUsuario = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => {
        console.log('configurar-usuario', payload);
        callback({
            ok: true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });
        //io.emit('configurar-usuario', payload)
    });
};
exports.configurarUsuario = configurarUsuario;
