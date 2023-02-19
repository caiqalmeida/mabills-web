import Home from "./Home";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	it("should render home page", () => {
		render(<Home />);

		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});
});
