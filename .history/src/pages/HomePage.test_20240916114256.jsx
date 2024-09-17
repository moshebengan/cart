import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchCall } from "../utils/apiCalls";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { render, screen, waitFor } from "@testing-library/react";

vi.mock("../utils/apiCalls", () => ({
  fetchCall: vi.fn(),
}));

describe("LandingPage testing", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

//   it("renders loading component initially", () => {
//     fetchCall.mockResolvedValue([]);

//     render(
//       <BrowserRouter>
//         <HomePage />
//       </BrowserRouter>
//     );

//     expect(screen.getByText(/loading/i)).toBeInTheDocument();
//   });

it("displays error message if API call fails", async () => {
    const errorMessage = "Failed to load products";
    fetchCall.mockRejectedValueOnce(new Error(errorMessage)); // Mock API failure

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });

});
