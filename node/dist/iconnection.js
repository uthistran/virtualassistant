"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IConnection = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var IConnection = /** @class */ (function () {
    function IConnection() {
        this.router = express_1.default.Router();
        this.jsonParser = body_parser_1.default.json();
    }
    return IConnection;
}());
exports.IConnection = IConnection;
