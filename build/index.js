"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 5000;
// use the router object as middleware
app.use('/', index_1.default);
// start the express server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
exports.default = app;
