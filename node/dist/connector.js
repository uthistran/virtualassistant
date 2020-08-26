"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var Connector = /** @class */ (function () {
    function Connector() {
        this.Port = 8888;
        this.corsOption = {
            allowedHeaders: [
                'Origin',
                'X-Requested-With',
                'Content-Type',
                'Accept',
                'X-Access-Token',
            ],
            methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE'
        };
    }
    Connector.prototype.connect = function (controllers) {
        var app = express_1.default();
        // app.get('/', function (req, res) {
        //     res.send('helloworld');
        // })
        app.use(cors_1.default(this.corsOption));
        controllers.forEach(function (controller) {
            app.use('/', controller.router);
        });
        app.listen(this.Port, this.connected.bind(this));
    };
    Connector.prototype.connected = function () {
        console.log("Connected in Port : " + this.Port);
    };
    return Connector;
}());
exports.Connector = Connector;
