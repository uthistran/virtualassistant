"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAProcessor = void 0;
var dataprovider_1 = require("./dataprovider");
var VAProcessor = /** @class */ (function () {
    function VAProcessor() {
    }
    VAProcessor.prototype.ProcessRequest = function (question) {
        console.log(question);
        var res = dataprovider_1.DataProvider.ResponseTexts;
        var resobj = { "answer": {} };
        resobj["answer"] = res.developer;
        // let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        // return _obj;
        this.findKeyword(question.question);
        return resobj;
    };
    VAProcessor.prototype.findKeyword = function (question) {
        var words = question.split(' ');
    };
    return VAProcessor;
}());
exports.VAProcessor = VAProcessor;
