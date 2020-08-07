import express from "express"
import { IConnection } from "./iconnection";
export class Connector {
    constructor() {

    }
    Port: number = 3000;
    public connect(controllers : any) {
        const app: express.Application = express();

        // app.get('/', function (req, res) {
        //     res.send('helloworld');
        // })

        controllers.forEach((controller : IConnection) => {
            app.use('/', controller.router);
          });

        app.listen(this.Port);
    }
}