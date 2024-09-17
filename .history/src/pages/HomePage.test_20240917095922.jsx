import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { fetchCall } from "../utils/apiCalls";

vi.mock("../utils/apicalls", () => ({
    fetchCall: vi.fn(),
}))

describe("Homepage component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    })
    it("renders correct loading", () => {
        fetchCall.mockResolvedValue([]);
        render(
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          );
        expect(screen.getByRole("heading").textContent).toMatch(/loading/i)
    })
})