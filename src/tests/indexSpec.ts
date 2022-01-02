import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("returns the correct response", async () => {
		const response = await request.get("src/utilities/images");
		expect(response.status).toBe(200);
	});
	it('returns a 404 error', async () => {
		const response = await request.get("/bad");
		expect(response.status).toBe(404);
	});
	it("returns a 400 error", async () => {
		const response = await request.get("/bad");
		expect(response.status).toBe(400);
	});
});
