// import express and routes
import express from "express";
import routes from "./routes/index";

// application object created
const app = express();

// port where the app run declared
const port = 3080;

// use the router object as middleware
app.use("/api", routes);

// start the express server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

// application object exported
export default app;
