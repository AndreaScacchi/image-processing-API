// import path and sharp
import path from "path";
import sharp from "sharp";

// function to resize the images
const resizeImage = async (
	filePath: string,
	outputImages: string,
	width: number,
	height: number
): Promise<string> => {

	// use try catch block with sharp to resize the image, and catch the error 
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

export default resizeImage;
