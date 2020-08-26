import express from "express"
import { IConnection } from "./iconnection";
import cors from 'cors'
export class Connector {
    constructor() {

    }
    Port: number = 8888;
    corsOption : cors.CorsOptions = {
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token',
          ],
          methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE'
    }
    public connect(controllers : any) {
        const app: express.Application = express();

        // app.get('/', function (req, res) {
        //     res.send('helloworld');
        // })
        app.use(cors(this.corsOption))
        controllers.forEach((controller : IConnection) => {
            app.use('/', controller.router);
          });

        app.listen(this.Port, this.connected.bind(this));
    }

    private connected(){
        console.log("Connected in Port : " + this.Port);
    }
}