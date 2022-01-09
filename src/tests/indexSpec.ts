import supertest from "supertest";
import app from "../index";
import resizeImage from "../utilities/processImages";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("gets the image endpoint", async () => {
		const response = await request.get(
			"/api/route?imagename=santamonica&width=500&height=500"
		);
		expect(response.status).toBe(200);
		expect(response.body.message).toEqual(undefined);
	});
});

describe("test if the resizeImage function works", () => {
	const filePath =
		"/Users/Andrea/Dropbox//PC/Desktop/image-processing-API/images/full/santamonica.jpg";
	const outputImages =
		"/Users/Andrea/Dropbox/PC/Desktop/image-processing-API/images/thumb/santamonica-500x500.jpg";

	it("returns a valid response with the rigth image file", async () => {
		const response = await resizeImage(filePath, outputImages, 500, 500);
		expect(response).toBe(outputImages);
	});

	it('returns a 404 error for invalid image name', async () => {
		const response = await request.get(
			"/api/route?imagename=santamonic&width=500&height=500"
		);
		expect(response.status).toBe(404);
	})

	it('returns a 404 error for incomplete request', async () => {
		const response = await request.get(
			"/api/route?imagename=santamonica&width=500"
		);
		expect(response.status).toBe(404);
	})
});
