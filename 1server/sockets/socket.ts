import {Socket} from 'socket.io';
import socketIO from 'socket.io';
import { UsuariosLista } from '../classes/usuarios-lista';
import { Usuario } from '../classes/usuario';



export const usuariosConectados = new UsuariosLista();


export const conectarCliente = (cliente: Socket, io: socketIO.Server) => {
    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregar(usuario);
}


export const desconectar = (cliente: Socket, io: socketIO.Server) =>{
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');

        usuariosConectados.borrarUsuario(cliente.id);
        io.emit('usuarios-activos', usuariosConectados.getLista());
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

        usuariosConectados.actualizarNombre(cliente.id,payload.nombre);

        io.emit('usuarios-activos', usuariosConectados.getLista());

        callback({
            ok:true,
            mensaje: `Usuario ${payload.nombre}, configurado`
        });

    })
}


export const obtenerUsuarios  = (cliente: Socket, io: socketIO.Server) =>
{
    cliente.on('obtener-usuarios', () =>{
        io.emit('usuarios-activos', usuariosConectados.getLista());
    })
}

