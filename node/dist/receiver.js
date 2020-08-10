"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var iconnection_1 = require("./iconnection");
var vaprocessor_1 = require("./vaprocessor");
var Receiver = /** @class */ (function (_super) {
    __extends(Receiver, _super);
    function Receiver() {
        var _this = _super.call(this) || this;
        _this._vaprocessor = new vaprocessor_1.VAProcessor();
        _this.initializeRoutes();
        return _this;
    }
    Receiver.prototype.initializeRoutes = function () {
        this.router.post('/route', this.routeHandler.bind(this));
    };
    Receiver.prototype.routeHandler = function (request, response) {
        var answer = this.processRequest(request.body);
        response.send(answer);
    };
    Receiver.prototype.processRequest = function (question) {
        return this._vaprocessor.ProcessRequest(question);
    };
    return Receiver;
}(iconnection_1.IConnection));
exports.default = Receiver;
