import express from "express";
import /*getImage,*/ resizeImage from "../../utilities/processImages";
import path from "path";
import fs from "fs";
const route = express.Router();

/*route.get(
	"/",
	async (req: express.Request, res: express.Response): Promise<void> => {
		const image = await getImage(
			req.query.imageName as string,
			parseInt(req.query.width as string),
			parseInt(req.query.height as string)
		);

		if (image) {
			res.status(200).sendFile(image);
		} else {
			try {
				const width = parseInt(req.query.width as string);
				const height = parseInt(req.query.height as string);
				if (!width || !height) {
					res.status(400).send(
						"An error occurred with width or height"
					);
					return;
				}
				const filePath = await resizeImage(
					req.query.imageName as string,
					width,
					height
				);
				res.status(200).sendFile(filePath);
			} catch (err) {
				if (err instanceof Error) {
					res.status(404).send(
						"Provide a valid image, with a valid width and height"
					);
				} else {
					res.send("An error occurred when resize the image");
				}
			}
		}
	}
);*/

route.get("/", async (req: express.Request, res: express.Response) => {
	let imagename = req.query.imagename as string;
	let width = parseInt(req.query.width as string);
	let height = parseInt(req.query.height as string);
	try {
		if (!imagename || !width || !height) {
			return res
				.status(404)
				.send(
					"An error occurred, please insert an image name, width and height"
				);
		}

		// input file path
		let filePath = path.resolve("images/full", `${imagename}.jpg`);
		if (!fs.existsSync(filePath)) {
			return res.status(404).send("File don't exist! Try another name");
		}

		// output file path
		let outputImages = path.resolve(
			"images/thumb",
			`${imagename}-${width}x${height}.jpg`
		);

		// check if there is already a file
		if (fs.existsSync(outputImages)) {
			res.sendFile(outputImages);
		} else {
			outputImages = await resizeImage(
				filePath,
				outputImages,
				width,
				height
			);
			res.sendFile(outputImages);
		}
	} catch(err) {
		if(err instanceof Error) {
			res.status(404).send(`There is an error: ${err.message}`);
		}
	}
});

export default route;
