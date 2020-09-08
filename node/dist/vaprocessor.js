"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAProcessor = void 0;
var dataprovider_1 = require("./dataprovider");
var VAProcessor = /** @class */ (function () {
    function VAProcessor() {
        this.escapeKey = ['?', '\n'];
        this.MappingText = dataprovider_1.DataProvider.Mapping;
        this.ResponseTexts = dataprovider_1.DataProvider.ResponseTexts;
    }
    VAProcessor.prototype.ProcessRequest = function (question) {
        console.log(question);
        //let res = DataProvider.ResponseTexts;
        var resobj = { "answer": {} };
        resobj["answer"] = this.findKeyword(question.question);
        // let _obj: IResponse = JSON.parse('{"answer" : "hello world"}');
        // return _obj;
        // this.findKeyword(question.question);
        return resobj;
    };
    VAProcessor.prototype.findKeyword = function (question) {
        var words = question.split(' ');
        var answer;
        for (var i = 0; i < words.length; i++) {
            var mapWord = this.MappingText[this.escapeUnwantedChars(words[i])];
            if (mapWord) {
                answer = this.ResponseTexts[mapWord];
                break;
            }
        }
        if (answer) {
            return answer;
        }
        else
            return "Sorry! I dont understand your question";
    };
    VAProcessor.prototype.escapeUnwantedChars = function (word) {
        var _this = this;
        if (word)
            return word.replace(/[?\n]/g, function (char) { return _this.escapeKey[char] || ''; });
        else
            return "";
    };
    return VAProcessor;
}());
exports.VAProcessor = VAProcessor;
