// express and route imported
import express from "express";
import route from "./api/route";

// router object declared
const routes = express.Router();

// use the router object for the main API route
routes.get("/", (req: express.Request, res: express.Response): void => {
	res.send("API route");
});

// use the router object as middleware
routes.use("/route", route);

export default routes;
