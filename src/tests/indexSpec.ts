import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("gets the API endpoint", async () => {
		const response = await request.get("/");
		expect(response.status).toBe(200);
	});
});

describe("Test if iamges are resized", () => {
	let originalTimeout;
	beforeEach( () => {
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	})
	it("returns a valid response", async () => {
		const response = await request.get("/route?imageName=santamonica&width=500%height=500");
		expect(response.status).toBe(200);
	});
	it("returns a 404 error for invalid name image", async () => {
		const response = await request.get("/route?imageName=wrongName&width=500%height=500");
		expect(response.status).toBe(404);
	});
	it("returns a 400 error for incomplete request", async () => {
		const response = await request.get("/route?imageName=santamonica&height=500");
		expect(response.status).toBe(404);
	});
})
