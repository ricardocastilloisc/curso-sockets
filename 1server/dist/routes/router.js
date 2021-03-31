"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
exports.router = express_1.Router();
exports.router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    });
});
exports.router.post('/mensajes/', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const server = server_1.default.instance;
    const payload = { cuerpo, de };
    server.io.emit('mensaje-nuevo', payload);
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
exports.router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const server = server_1.default.instance;
    const payload = {
        de,
        cuerpo
    };
    server.io.in(id).emit('mensaje-privado', payload);
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
//servicio para obtener todos los IDs de todos los usuarios
exports.router.get('/usuarios', (req, res) => {
    const server = server_1.default.instance;
    server.io.allSockets().then(client => {
        let clientes = [];
        client.forEach(e => {
            clientes.push(e);
        });
        res.json({
            ok: true,
            clientes
        });
    });
});
exports.default = exports.router;
