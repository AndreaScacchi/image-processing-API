// import supertest, app and resizeImage function
import supertest from "supertest";
import app from "../index";
import resizeImage from "../utilities/processImages";

// pass the application object to supertest
const request = supertest(app);

// test the endpoint
describe("Test endpoint responses", () => {
	it("gets the image endpoint", async () => {
		const response = await request.get(
			"/api/route?imagename=icelandwaterfall&width=700&height=700"
		);
		expect(response.status).toBe(200);
		expect(response.body.message).toEqual(undefined);
	});
});

// test it the resizeImage function works
describe("test if the resizeImage function works", () => {
	const filePath =
		"/Users/Andrea/Dropbox//PC/Desktop/image-processing-API/images/full/icelandwaterfall.jpeg";
	const outputImages =
		"/Users/Andrea/Dropbox/PC/Desktop/image-processing-API/images/thumb/icelandwaterfall-700x700.jpeg";

	// return a valid response
	it("returns a valid response with the rigth image file", async () => {
		const response = await resizeImage(filePath, outputImages, 700, 700);
		expect(response).toBe(outputImages);
	});

	// return a 404 response for incorrect image name
	it("returns a 404 error for incorrect image name", async () => {
		const response = await request.get(
			"/api/route?imagename=iceland_waterfall&width=700&height=700"
		);
		expect(response.status).toBe(404);
	});
	// return a 404 response for incomplete request
	it("returns a 404 error for incomplete request", async () => {
		const response = await request.get(
			"/api/route?imagename=icelandwaterfall&width=700"
		);
		expect(response.status).toBe(404);
	});
});
