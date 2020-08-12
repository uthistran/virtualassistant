import { IRequest } from "./irequest";
import { IResponse } from "./iresponse";
import { DataProvider } from "./dataprovider";

export class VAProcessor{
    
    public ProcessRequest(question : IRequest) : IResponse{
        console.log(question)
        let res = DataProvider.ResponseTexts;
        let resobj = { "answer" : {}}
        resobj["answer"] = res;
        // let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        // return _obj;
        this.findKeyword(question.question);

        return resobj;
    }

    private findKeyword(question : string){
        let words = question.split(' ');
    }
}