"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express and route imported
var express_1 = __importDefault(require("express"));
var route_1 = __importDefault(require("./api/route"));
// router object declared
var routes = express_1.default.Router();
// use the router object for the main API route
routes.get("/", function (req, res) {
    res.send("API route");
});
routes.use("/route", route_1.default);
exports.default = routes;
