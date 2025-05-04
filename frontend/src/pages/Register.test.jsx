// import { render, screen, fireEvent } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import Register from "./Register";
// import React from "react";

// // Mock Firebase auth
// jest.mock("firebase/auth", () => ({
//   createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
//     user: { uid: "test-uid", email: "test@example.com" },
//   }),
// }));

// // Mock the firebase module with correct path
// jest.mock("../firebase", () => ({
//   auth: {},
// }));

// test("renders the Register form and submits data", () => {
//   render(
//     <BrowserRouter>
//       <Register />
//     </BrowserRouter>
//   );

//   const emailInput = screen.getByPlaceholderText(/email/i);
//   const passwordInput = screen.getByPlaceholderText(/password/i);
//   const submitButton = screen.getByRole("button", { name: /register/i });

//   fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//   fireEvent.change(passwordInput, { target: { value: "password123" } });
//   fireEvent.click(submitButton);

//   // Since we've mocked Firebase, no need to check for loading state
//   // Just verify the form rendered correctly
//   expect(emailInput).toHaveValue("test@example.com");
//   expect(passwordInput).toHaveValue("password123");
// });

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as router from "react-router-dom";
import Register from "./Register";

// Mock the navigation function
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

// Mock Firebase auth
jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn().mockImplementation(() =>
    Promise.resolve({
      user: { uid: "test-uid", email: "test@example.com" },
    })
  ),
}));

// Mock toast notifications
jest.mock("react-hot-toast", () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

// Mock Firebase
jest.mock("../firebase", () => ({
  auth: {},
}));

describe("Register Component", () => {
  test("renders the register form correctly", () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    // Check if form elements are rendered
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /register/i })
    ).toBeInTheDocument();
  });

  test("handles form submission correctly", async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    // Fill out the form
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button", { name: /register/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(submitButton);

    // Wait for async operations and verify navigation was called
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
