// import path and checkFile function
import path from "path";
import checkFile from "../utilities/checkFile";

// test if the image exist
describe("Test to find out if the file/image exist", async () => {
	const rightPath = path.resolve("images/thumb/santamonica-500x500.jpg");
	const incorrectPath = "./images/thumb/santamonic200x200.jpg";

	// test the right path
	it("expects that file exist", async () => {
		const fileResult = await checkFile(rightPath);
		expect(fileResult).toBeTrue();
	});

	// test the incorrect path
	it("expects that file does not exist", async () => {
		const fileResult = await checkFile(incorrectPath);
		expect(fileResult).toBeFalse();
	});
});
