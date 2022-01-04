import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("gets the API endpoint", async () => {
		const response = await request.get("/");
		expect(response.status).toBe(200);
	});
	it('returns a correct response', async () => {
		const response = await request.get("/route?image=santamonica&width=500%height=500");
		expect(response.status).toBe(200);
	});
	it("returns a 404 error", async () => {
		const response = await request.get("/route?image=wrongName&width=500%height=500");
		expect(response.status).toBe(404);
	});
	it("returns a 400 error", async () => {
		const response = await request.get("/route?image=santamonica&height=500");
		expect(response.status).toBe(400);
	});
});
