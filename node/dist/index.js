"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var connector_1 = require("./connector");
var receiver_1 = __importDefault(require("./receiver"));
var initializer_1 = require("./initializer");
var connection = new connector_1.Connector();
connection.connect([new initializer_1.Initializer(), new receiver_1.default()]);
