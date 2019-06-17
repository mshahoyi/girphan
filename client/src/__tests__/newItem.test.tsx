import { cleanup, render, fireEvent } from "@testing-library/react";
import NewItem from "../components/newItem";
import React from "react";

describe("NewItem component", () => {
	afterEach(cleanup);

	it("has input fields for name, quantity, unit price, total price, date, description, category, and tag", () => {
		const { getByPlaceholderText } = render(<NewItem />);

		expect(getByPlaceholderText("Name of the item(s)")).toBeDefined();
		expect(
			getByPlaceholderText("Number of the items you bought")
		).toBeDefined();
		// expect(getByPlaceholderText("Price of one item")).toBeDefined();
		// expect(getByPlaceholderText("Price of all the items")).toBeDefined();
		// expect(getByPlaceholderText("Category")).toBeDefined();
		// expect(getByPlaceholderText("Tag(s)")).toBeDefined();
		expect(getByPlaceholderText("Date")).toBeDefined();
		// expect(getByPlaceholderText("Description")).toBeDefined();
	});

	it("has an Add button (for submission) and submits with the data provided in the form", () => {
		const mockfn = jest.fn();
		const { getByText, getByPlaceholderText } = render(
			<NewItem onSubmit={mockfn} />
		);
		expect(getByText("ADD")).toBeDefined();

		const description = "some item aquisition";
		const name = "some item name";

		fireEvent.change(getByPlaceholderText("Name of the item(s)"), {
			target: { value: name }
		});
		getByText("ADD").click();
		expect(mockfn.mock.calls[0][0]).toEqual({ name: name });
		expect(mockfn.mock.calls.length).toEqual(1);

		fireEvent.change(getByPlaceholderText("Description"), {
			target: { value: description }
		});
		getByText("ADD").click();
		expect(mockfn.mock.calls[1][0]).toEqual({
			name: name,
			description: description
		});

		expect(mockfn.mock.calls.length).toEqual(2);
	});

	it("default value of date must be today and default value of quantity must be one", () => {});
});
