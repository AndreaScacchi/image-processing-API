// import express, resizeImage function, path and fs
import express from "express";
import resizeImage from "../../utilities/processImages";
import path from "path";
import fs from "fs";

// router object created
const route = express.Router();

// implemented the route
route.get(
	"/",
	async (req: express.Request, res: express.Response): Promise<void> => {
		let imagename = req.query.imagename as string;
		let width = parseInt(req.query.width as string);
		let height = parseInt(req.query.height as string);

		// use try catch block to catch an error if occurs
		try {
			// check if the image name, width or height are valid
			if (!imagename || !width || !height) {
				res.status(404).send(
					"An error occurred, please insert an image name, width and height"
				);
				return;
			}

			// create input file path
			let filePath = path.resolve("images/full", `${imagename}.jpg`);
			if (!fs.existsSync(filePath)) {
				res.status(404).send("Image don't exist! Try another name");
				return;
			}

			//  create output file path
			let outputImages = path.resolve(
				"images/thumb",
				`${imagename}-${width}x${height}.jpeg`
			);

			// check if there is already a file
			if (fs.existsSync(outputImages)) {
				res.sendFile(outputImages);
				return;
			} else {
				// otherwise invoke the resizeImage function
				outputImages = await resizeImage(
					filePath,
					outputImages,
					width,
					height
				);
				res.sendFile(outputImages);
			}
		} catch (err) {
			if (err instanceof Error) {
				// catch the error
				res.status(404).send(`There is an error: ${err.message}`);
			}
		}
	}
);

export default route;
