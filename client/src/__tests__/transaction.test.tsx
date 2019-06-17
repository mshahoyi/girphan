import { render, cleanup, fireEvent } from "@testing-library/react";
import Transaction from "../components/transaction";
import React from "react";

describe("useForm Hook", () => {
	afterEach(cleanup);

	it("Has input areas for description, amount and date of the transaction", () => {
		const { getByPlaceholderText } = render(<Transaction />);
		expect(getByPlaceholderText("Description")).toBeDefined();
		expect(getByPlaceholderText("Sum")).toBeDefined();
		expect(getByPlaceholderText("Date")).toBeDefined();
	});

	it("Form submission must call the provided function in props", () => {
		const mockfn = jest.fn();
		const { getByPlaceholderText, getByText } = render(
			<Transaction onSubmit={mockfn} />
		);
		fireEvent.click(getByText("ADD"));

		expect(mockfn.mock.calls.length).toEqual(1);
	});
});
