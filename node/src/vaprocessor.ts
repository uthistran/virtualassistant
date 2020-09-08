import { IRequest } from "./irequest";
import { IResponse } from "./iresponse";
import { DataProvider } from "./dataprovider";

export class VAProcessor {

    constructor() {
        this.MappingText = DataProvider.Mapping;
        this.ResponseTexts = DataProvider.ResponseTexts;
    }

    private MappingText: any;
    private ResponseTexts: any;
    private escapeKey = ['?', '\n'];

    public ProcessRequest(question: IRequest): IResponse {
        console.log(question)
        //let res = DataProvider.ResponseTexts;
        let resobj = { "answer": {} }
        resobj["answer"] = this.findKeyword(question.question);
        // let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        // return _obj;
        // this.findKeyword(question.question);

        return resobj;
    }

    private findKeyword(question: string): string {
        let words = question.split(' ');
        let answer;
        for (var i = 0; i < words.length; i++) {
            let mapWord = this.MappingText[this.escapeUnwantedChars(words[i])];
            if (mapWord) {
                answer = this.ResponseTexts[mapWord];
                break;
            }
        }
        if (answer) {
            return answer;
        } else
            return "Sorry! I dont understand your question";
    }

    private escapeUnwantedChars(word: string): string {
        if (word)
            return word.replace(/[?\n]/g, (char: any) => this.escapeKey[char] || '');
        else
            return "";
    }
}