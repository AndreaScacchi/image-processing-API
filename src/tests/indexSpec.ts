import supertest from "supertest";
import app from "../index";

const request = supertest(app);
describe("Test endpoint responses", () => {
	it("return the correct response", async () => {
		const response = await request.get("src/utilities/images");
		expect(response.status).toBe(200);
	});
});
