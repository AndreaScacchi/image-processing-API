import supertest from "supertest";
import app from "../index";
import resizeImage from "../utilities/processImages";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("gets the image endpoint", async () => {
		const response = await request.get(
			"/api/route?filename=fjord&width=300&height=300"
		);
		expect(response.status).toBe(200);
		expect(response.body.message).toEqual(undefined);
	});
});

describe("resize image function tests", () => {
	const filePath =
		"/Users/Andrea/Dropbox//PC/Desktop/image-processing-API/images/full/fjord.jpg";
	const outputImages =
		"/Users/Andrea/Dropbox/PC/Desktop/image-processing-API/images/thumb/300-300-fjord.jpg";

	it("returns the rigth image file", async () => {
		const response = await resizeImage(filePath, outputImages, 300, 300);
		expect(response).toBe(outputImages);
	});

	it('returns a 404 error for invalid image name', async () => {
		const response = await request.get(
			"/api/route?filename=fjor&width=300&height=300"
		);
		expect(response.status).toBe(404);
	})

	it('returns a 404 error for incomplete request', async () => {
		const response = await request.get(
			"/api/route?filename=fjor&width=300"
		);
		expect(response.status).toBe(404);
	})
});
