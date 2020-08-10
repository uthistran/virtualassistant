"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VAProcessor = void 0;
var VAProcessor = /** @class */ (function () {
    function VAProcessor() {
    }
    VAProcessor.prototype.ProcessRequest = function (question) {
        var _obj = JSON.parse('{"answer" : "hello world"}');
        return _obj;
    };
    return VAProcessor;
}());
exports.VAProcessor = VAProcessor;
