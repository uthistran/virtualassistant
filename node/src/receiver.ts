import express from 'express'
import { IConnection } from './iconnection';
export default class Receiver extends IConnection{
    
    constructor(){
        super()
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get('/route', this.routeHandler)
    }
    routeHandler(request : express.Request, response : express.Response) {
        response.send('you reached');
    }

}