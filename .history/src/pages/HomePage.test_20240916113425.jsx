import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchCall } from "../utils/apiCalls";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";

vi.mock("../utils/apiCalls", () => ({
    fetchCall: vi.fn(),
}));


describe("LandingPage testing", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    })

    it("renders loading component initially", () => {
        fetchCall.mockResolvedValue([]);

        render(
            <BrowserRouter>
                <HomePage/>
            </BrowserRouter>
        );

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })
})

