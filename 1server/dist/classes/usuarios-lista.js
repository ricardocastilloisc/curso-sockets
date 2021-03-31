"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
        //agregar un usuario
        this.agregar = (usuario) => {
            this.lista.push(usuario);
            console.log(this.lista);
            return usuario;
        };
        this.actualizarNombre = (id, nombre) => {
            this.lista.map(e => {
                if (e.id == id)
                    e.nombre = nombre;
            });
            console.log('actualizando usuarios');
            console.log(this.lista);
        };
        this.getLista = () => { return this.lista; };
        this.getUsuario = (id) => {
            return this.lista.find(usuario => usuario.id === id);
        };
        this.getUsuariosEnSala = (sala) => {
            return this.lista.filter(usuario => usuario.sala === sala);
        };
        this.borrarUsuario = (id) => {
            const tempUsuario = this.getUsuario(id);
            this.lista = this.lista.filter(usuario => usuario.id !== id);
            console.log(this.lista);
            return tempUsuario;
        };
    }
}
exports.UsuariosLista = UsuariosLista;
