import request from "supertest";
import app from "../server.js"; // export your Express app from server.js
import { connectDB, disconnectDB } from "./setup.js";
import User from "../models/User.js";

beforeAll(connectDB);
afterAll(disconnectDB);
afterEach(async () => {
  await User.deleteMany(); // Clear test data after each test
});

describe("Auth Routes", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully.");
  });

  it("should login a registered user", async () => {
    // First register the user
    await request(app).post("/api/auth/register").send({
      username: "loginuser",
      email: "login@example.com",
      password: "password123",
    });

    // Then login
    const res = await request(app).post("/api/auth/login").send({
      email: "login@example.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body.user.email).toBe("login@example.com");
  });

  it("should fail login with wrong password", async () => {
    await request(app).post("/api/auth/register").send({
      username: "failuser",
      email: "fail@example.com",
      password: "correctpassword",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "fail@example.com",
      password: "wrongpassword",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid credentials");
  });
});
