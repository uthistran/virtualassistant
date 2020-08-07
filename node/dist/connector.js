"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var express_1 = __importDefault(require("express"));
var Connector = /** @class */ (function () {
    function Connector() {
        this.Port = 3000;
    }
    Connector.prototype.connect = function (controllers) {
        var app = express_1.default();
        // app.get('/', function (req, res) {
        //     res.send('helloworld');
        // })
        controllers.forEach(function (controller) {
            app.use('/', controller.router);
        });
        app.listen(this.Port);
    };
    return Connector;
}());
exports.Connector = Connector;
