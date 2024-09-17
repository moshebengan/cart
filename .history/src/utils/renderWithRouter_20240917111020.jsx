import { render } from "@testing-library/react";
import { isValidElement } from "react"
import { createMemoryRouter, RouterProvider } from "react-router-dom";


const renderWithRouter = (children, routes = []) => {
    const options = isValidElement(children) ?
    { element: children, path: "/"} : children;

    const router  = createMemoryRouter([{...options}, ...routes], {
        initialEntries: [options.path],
        initialIndex: 1
    });

    return render(<RouterProvider router={router} />);

};


export default renderWithRouter;
