// import express from "express"
// const app:express.Application = express();

import { Connector } from "./connector";
// app.get('/', function(req, res){
//     res.send('helloworld');
// })

// app.listen(3000);

let connection = new Connector()
connection.connect();