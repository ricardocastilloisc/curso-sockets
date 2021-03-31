import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public socketStatus = false;
  public usuario: Usuario;
  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus = () => {
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
      this.socketStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidro');
      this.socketStatus = false;
    });
  };

  emit = (evento: string, payload?:any, callback?: Function) =>{
    //emmit('veneto que quiero emitri', payload, callbak)

    console.log('emitiendo mensaje');

    this.socket.emit(evento, payload, callback);
  }

  listen = (evento:string) => {
    return this.socket.fromEvent(evento);
  }

  loginWs = (nombre:string) =>{

    this.emit('configurar-usuario', {nombre},(resp) => {
      console.log(resp);
    })

  }

}
