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
exports.Initializer = void 0;
var iconnection_1 = require("./iconnection");
var Initializer = /** @class */ (function (_super) {
    __extends(Initializer, _super);
    function Initializer() {
        var _this = _super.call(this) || this;
        _this.initializeRoutes();
        return _this;
    }
    Initializer.prototype.initializeRoutes = function () {
        this.router.post('/initialize', this.routeHandler.bind(this));
    };
    Initializer.prototype.routeHandler = function (request, response) {
        this.initialize();
        response.send("Initialized");
    };
    Initializer.prototype.initialize = function () {
    };
    return Initializer;
}(iconnection_1.IConnection));
exports.Initializer = Initializer;
