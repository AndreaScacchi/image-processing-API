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
		expect(response.body.message).toBe(undefined);
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

	it('returns a 400 error for incomplete request', async () => {
		const response = await request.get(
			"/api/route?filename=fjor&width=300"
		);
		expect(response.status).toBe(400);
	})
});

/*describe("Test if iamges are resized", () => {
	it("returns a valid response", async () => {
		const response = await request.get(
			"/route?imageName=santamonica&width=500&height=500"
		);
		expect(response.status).toBe(200);
		expect(response.body.message).toBe("valid response");
	});
	it("returns a 404 error for invalid name image", async () => {
		const response = await request.get(
			"/route?imageName=wrongName&width=500&height=500"
		);
		expect(response.status).toBe(404);
		expect(response.body.message).toBe("invalid name image");
	});
	it("returns a 400 error for incomplete request", async () => {
		const response = await request.get(
			"/route?imageName=santamonica&height=500"
		);
		expect(response.status).toBe(404);
		expect(response.body.message).toBe("incomplete request");
	});
});*/
