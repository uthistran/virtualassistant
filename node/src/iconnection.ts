import express from 'express'
import bodyParser from 'body-parser'
export class IConnection {
    public router = express.Router();
    public jsonParser = bodyParser.json()
}