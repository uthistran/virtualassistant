import { IRequest } from "./irequest";
import { IResponse } from "./iresponse";
import { DataProvider } from "./dataprovider";

export class VAProcessor{
    
    public ProcessRequest(question : IRequest) : IResponse{
        let res = DataProvider.ResponseTexts;
        let resobj = { "answer" : {}}
        resobj["answer"] = res;
        // let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        // return _obj;
        return resobj;
    }
}