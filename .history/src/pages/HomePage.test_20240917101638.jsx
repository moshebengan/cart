import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { fetchCall } from "../utils/apiCalls";

// Mocking fetchCall API
vi.mock("../utils/apicalls", () => ({
  fetchCall: vi.fn(),
}));

describe("Homepage component", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear all mocks before each test
  });
  it("renders correct loading", () => {
    fetchCall.mockResolvedValue([]); // Clear all mocks before each test
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Check if loading component is rendered
    expect(screen.getByRole("heading").textContent).toMatch(/loading/i);
  });

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
      expect(screen.getByRole("heading").textContent).toMatch(
        /oh snap! something went wrong/i
      );
    });
  });

  it("renders the products correctly", async () => {
    const mockProducts = [
      { id: 1, title: "Product 1", image: "/image1.png", price: "$10" },
      { id: 2, title: "Product 2", image: "/image2.png", price: "$20" },
      { id: 3, title: "Product 3", image: "/image3.png", price: "$30" },
      { id: 4, title: "Product 4", image: "/image4.png", price: "$40" },
    ];

    // Mock a successful API call with product data
    fetchCall.mockResolvedValueOnce(mockProducts);

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    // Wait for the products to be rendered
    await waitFor(() => {
        // check if products name are displayed
        mockProducts.forEach((product) => {
            expect(screen.getByText(product.title)).toContain(/product/i)
        })
    })
  });
});
