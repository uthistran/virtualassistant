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
        response.send("I am virtual PA of Uthistran. Type in the question you want to know about him");
    }

    private initialize() {

    }
}