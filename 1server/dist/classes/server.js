"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.start = (callback) => {
            this.httpServer.listen(this.port, callback);
        };
        this.app = express_1.default();
        this.port = environment_1.SERVERT_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = require("socket.io")(this.httpServer, {
            cors: {
                origin: true,
                credentials: true
            },
        });
        this.escucharSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        console.log('Escuchando conexiones');
        this.io.on('connection', (cliente) => {
            console.log('Cliente conectado');
        });
    }
}
exports.default = Server;
