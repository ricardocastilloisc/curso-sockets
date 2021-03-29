import Server from './classes/server';
import { SERVERT_PORT } from './global/environment';
import router  from './routes/router';
import bodyParser, { json } from 'body-parser';
import cors from 'cors';

const server = new Server();

//bodyparser

server.app.use(bodyParser.urlencoded({extended: true}))
server.app.use(bodyParser.json())

//rutas de servicio

//cors

server.app.use(cors({origin: true, credentials:true}))
server.app.use('/', router)

server.start(
    ()=> {
        console.log(`Servidor corriendo en el puerto ${SERVERT_PORT}`)
    }
)


