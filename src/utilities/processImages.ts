/*import { promises as fspromises } from "fs";*/
import path from "path";
import sharp from "sharp";

/*const getImage = async (
	imageName: string,
	width: number,
	height: number
): Promise<string> => {
	const imagesDirectory = path.join(__dirname, "../..", "/images/full/");
	const filePath = path.join(
		imagesDirectory,
		`${imageName}${width}x${height}.jpg`
	);

	try {
		await fspromises.readdir(imagesDirectory);
	} catch {
		await fspromises.mkdir(imagesDirectory);
	}

	try {
		await fspromises.readFile(filePath, { flag: "r" });
	} catch (err) {
		let errorMessage = "Got an error trying to read the file";
		if (err instanceof Error) {
			errorMessage = `${errorMessage}: ${err.message}`;
		}
		console.log(errorMessage);
	}
	return filePath;
};*/

// function to resize the images
const resizeImage = async (
	filePath: string,
	outputImages: string,
	width: number,
	height: number
): Promise<string> => {

	try {
		await sharp(path.resolve(filePath))
			.resize(width, height)
			.toFile(path.resolve(outputImages))
	} catch (err) {
		if (err instanceof Error) {
			console.log(`Cannot resize the image: ${err.message}`);
		}
	}
	return outputImages;
};

export default /*getImage,*/ resizeImage;
