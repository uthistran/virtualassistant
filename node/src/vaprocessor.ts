import { IRequest } from "./irequest";
import { IResponse } from "./iresponse";

export class VAProcessor{
    
    public ProcessRequest(question : IRequest) : IResponse{
        let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        return _obj;
    }
}