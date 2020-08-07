import express from "express"
export class Connector {
    constructor() {

    }
    Port: number = 3000;
    public connect() {
        const app: express.Application = express();

        app.get('/', function (req, res) {
            res.send('helloworld');
        })

        app.listen(this.Port);
    }
}