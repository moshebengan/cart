import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./HomePage";


describe("Homepage component", () => {
    it("renders correct heading", () => {
        render(<HomePage/>)
        expect(screen.getByRole("heading").textContent).toMatch(/fashion fades. style is eternal./i)
    })
})