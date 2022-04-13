import express, { Application } from 'express';
import userRoutes from '../routes/usuario.route';
import cors from 'cors';
import db from '../db/connection';

class Server {
    // private app; se lo puede dejar asi, pero es mejor definir el tipo
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'; //colocamos esto porque sino
        //TypeScript nos dice que process.env.PORT puede bvenir undefined y el 
        //this.por solo acepta strings. Con eso controlamos que si llega undefined 
        //coloque el puerte 8000;
        this.dbConnection();
        this.middlewares();
        this.routes(); //definir mis rutas
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Base de datos en linea');    

        } catch (error:any) {
            throw new Error(error);
        }
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura del body
        this.app.use(express.json());
        //Servir directorio público
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port);
        })
    }
}

export default Server;