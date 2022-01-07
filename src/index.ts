import express from "express";
import routes from "./routes/index";
const app = express();
const port = 5000;

// use the router object as middleware
app.use("/", routes, (req: express.Request, res: express.Response): void => {
	res.send("helllo");
});

// start the express server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

export default app;
