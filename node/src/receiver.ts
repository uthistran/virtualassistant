import express from 'express'
import { IConnection } from './iconnection';
import { VAProcessor } from './vaprocessor';
import { IRequest } from './irequest';
import { IResponse } from './iresponse';
export default class Receiver extends IConnection{
    
    _vaprocessor = new VAProcessor();
    constructor(){
        super()
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post('/route', this.routeHandler.bind(this))
    }
    private routeHandler(request : express.Request, response : express.Response) {
        let answer = this.processRequest(request.body as IRequest);
        response.send(answer);
    }

    private processRequest(question : IRequest) : IResponse{
        return this._vaprocessor.ProcessRequest(question)
    }

}