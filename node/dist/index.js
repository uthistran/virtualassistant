"use strict";
// import express from "express"
// const app:express.Application = express();
Object.defineProperty(exports, "__esModule", { value: true });
var connector_1 = require("./connector");
// app.get('/', function(req, res){
//     res.send('helloworld');
// })
// app.listen(3000);
var connection = new connector_1.Connector();
connection.connect();
