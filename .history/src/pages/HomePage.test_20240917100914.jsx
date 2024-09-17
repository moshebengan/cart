import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { fetchCall } from "../utils/apiCalls";

// Mocking fetchCall API
vi.mock("../utils/apicalls", () => ({
    fetchCall: vi.fn(),
}))

describe("Homepage component", () => {
    beforeEach(() => {
        vi.clearAllMocks(); // Clear all mocks before each test
    })
    it("renders correct loading", () => {
        fetchCall.mockResolvedValue([]); // Clear all mocks before each test
        render(
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          );

        // Check if loading component is rendered
        expect(screen.getByRole("heading").textContent).toMatch(/loading/i)
    })

    it("displays error message if API call fails", async () => {
        const errorMessage = "OH SNAP! SOMETHING WENT WRONG";
        fetchCall.mockRejectedValueOnce(new Error(errorMessage)); // Mock API FAILURE

        render(
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          );

          // Wait for error message to appear
          await waitFor(() => {
            expect(screen.getByRole("heading").toMatch(/oh snap! something went wrong/i))
          })
    })
})