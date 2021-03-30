"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
};
exports.desconectar = desconectar;
const mensaje = (cliente) => {
    cliente.on('mensaje', (payload) => {
        console.log('mesaje recibo', payload);
    });
};
exports.mensaje = mensaje;
