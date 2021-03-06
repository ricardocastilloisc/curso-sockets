import express from 'express'
import { SERVERT_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http'
import  * as socket from '../sockets/socket';


export default class Server{
    private static _instance: Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server
    private constructor(){
        this.app = express();
        this.port = SERVERT_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = require("socket.io")(this.httpServer, {
            cors: {
                origin: true,
                credentials: true
              },            
          });
        this.escucharSockets();
    }

    public static get instance(){
        return this._instance||(this._instance=new this());
    }
 
    private escucharSockets(){
        console.log('Escuchando conexiones');
        this.io.on('connection',(cliente)=>{


            //conectar clientes

            socket.conectarCliente(cliente, this.io);
        

            //configurar usuario
            socket.configurarUsuario(cliente, this.io);

            

            //obtener usuarios activos
            socket.obtenerUsuarios(cliente, this.io);
    

            //console.log('Cliente conectado');

            socket.mensaje(cliente, this.io);

            

            socket.desconectar(cliente, this.io);
        })
    }

    start = (callback:any) =>{

        this.httpServer.listen(this.port, callback);

    }
}