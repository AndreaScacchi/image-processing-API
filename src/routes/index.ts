import express from "express";
import route from "./api/route";

// router object
const routes = express.Router();

routes.use("/route", route);

export default routes;
