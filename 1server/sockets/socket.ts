import {Socket} from 'socket.io';
import socketIO from 'socket.io';
export const desconectar = (cliente: Socket) =>{
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
}


export const mensaje  = (cliente: Socket, io: socketIO.Server) =>
{
    cliente.on('mensaje', (payload:{de:string, cuerpo:string}) =>{

        console.log('mesaje recibo', payload);

        io.emit('mensaje-nuevo', payload)
    })
}

export const configurarUsuario  = (cliente: Socket, io: socketIO.Server) =>
{
    cliente.on('configurar-usuario', (payload:{nombre:string}, callback:Function) =>{

        console.log('configurar-usuario', payload);

        callback({
            ok:true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        })

        //io.emit('configurar-usuario', payload)
    })
}

