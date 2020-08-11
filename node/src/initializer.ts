import { IConnection } from "./iconnection";
import express from "express"

export class Initializer extends IConnection{
    constructor(){
        super();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.post('/initialize', this.routeHandler.bind(this))
    }
    private routeHandler(request : express.Request, response : express.Response) {
        this.initialize();
        response.send("Initialized");
    }

    private initialize() {

    }
}