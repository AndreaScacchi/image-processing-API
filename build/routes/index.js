"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// router object
var routes = express_1.default.Router();
// define endpoint
routes.get('/', function (req, res) {
    res.send('NASA explore the Universe🌎🪐☄️🧑‍🚀🔭');
});
exports.default = routes;
