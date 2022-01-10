// express and route imported
import express from "express";
import route from "./api/route";

// router object declared
const routes = express.Router();

routes.get("/", (req: express.Request, res: express.Response): void => {
	res.send("API route");
});

routes.use("/route", route);

export default routes;
