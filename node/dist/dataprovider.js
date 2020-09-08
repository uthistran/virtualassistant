"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProvider = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var JSONProvider = /** @class */ (function () {
    function JSONProvider() {
        var rawdata = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../mapping.json'));
        var _obj = JSON.parse(rawdata.toString());
        this.Mapping = _obj.responseMapping;
        rawdata = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../response.json'));
        this.ResponseTexts = JSON.parse(rawdata.toString());
    }
    return JSONProvider;
}());
exports.DataProvider = new JSONProvider();
