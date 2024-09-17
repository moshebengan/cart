import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";


describe("Homepage component", () => {
    it("renders correct heading", () => {
        render(
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          );
          expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })
})