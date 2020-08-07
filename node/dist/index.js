"use strict";
// import express from "express"
// const app:express.Application = express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connector_1 = require("./connector");
var receiver_1 = __importDefault(require("./receiver"));
// app.get('/', function(req, res){
//     res.send('helloworld');
// })
// app.listen(3000);
var connection = new connector_1.Connector();
connection.connect([new receiver_1.default()]);
