import { Usuario } from './usuario';

export class UsuariosLista 
{
    private lista: Usuario[] = [];

    constructor(){}


    //agregar un usuario
    public agregar = (usuario:Usuario) =>
    {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre = (id:string, nombre: string) =>{

        this.lista.map(e  => {
            if(e.id == id)e.nombre = nombre
        });

        console.log('actualizando usuarios')
        console.log(this.lista);
    }

    public getLista = () =>{return this.lista}
    

    public getUsuario = (id:string) =>{
        return this.lista.find(usuario=> usuario.id === id);
    }

    public getUsuariosEnSala = (sala:string) =>{
        return this.lista.filter( usuario => usuario.sala === sala)
    }

    public borrarUsuario = (id:string) =>{
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario=>usuario.id !== id);
        console.log(this.lista);
        return tempUsuario;
    }
}