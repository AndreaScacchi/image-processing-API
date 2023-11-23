"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express and routes
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
// application object created
var app = (0, express_1.default)();
// port where the app run declared
var port = 3080;
// use the router object as middleware
app.use("/api", index_1.default);
// start the express server
app.listen(port, function () {
    console.log("Server started at http://localhost:".concat(port));
});
// application object exported
exports.default = app;
