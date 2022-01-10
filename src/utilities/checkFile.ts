// import access and constants
import { access } from "fs/promises";
import { constants } from "fs";

// declare the function that return a boolean value
const checkFile = async (imagePath: string): Promise<boolean> => {
	try {
		// read or write the file 
		await access(imagePath, constants.R_OK | constants.W_OK);
		return true;
	} catch (err) {
		// catch the error
		if (err instanceof Error) console.log(`Error: ${err.message}`);
		return false;
	}
};

export default checkFile;
