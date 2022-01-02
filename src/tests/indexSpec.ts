import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("gets the API endpoint", async () => {
		const response = await request.get("/");
		expect(response.status).toBe(200);
	});
	it('returns a correct response', async () => {
		const response = await request.get("/images?image=fjord&width=250%height=250");
		expect(response.status).toBe(200);
	});
	it("returns a 404 error", async () => {
		const response = await request.get("/images?image=wrongName&width=250%height=250");
		expect(response.status).toBe(404);
	});
	it("returns a 400 error", async () => {
		const response = await request.get("/images?image=wrongName&height=250");
		expect(response.status).toBe(400);
	});
});
