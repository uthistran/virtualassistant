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
var Receiver = /** @class */ (function (_super) {
    __extends(Receiver, _super);
    //public router = express.Router();
    function Receiver() {
        var _this = _super.call(this) || this;
        _this.initializeRoutes();
        return _this;
    }
    Receiver.prototype.initializeRoutes = function () {
        this.router.get('/route', this.routeHandler);
    };
    Receiver.prototype.routeHandler = function (request, response) {
        response.send('you reached');
    };
    return Receiver;
}(iconnection_1.IConnection));
exports.default = Receiver;
