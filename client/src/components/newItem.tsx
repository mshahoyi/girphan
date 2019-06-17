import React from "react";
import { Form } from "semantic-ui-react";
import useForm from "../hooks/useForm";

export default function NewItem({
	onSubmit
}: {
	onSubmit: (_: object) => void;
}) {
	const { handleChange, handleSubmit } = useForm(onSubmit);

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group widths="equal">
				<Form.Input
					label="Name"
					name="name"
					onChange={handleChange}
					placeholder="Name of the item(s)"
				/>
				<Form.Input
					label="Quantity"
					name="quantity"
					onChange={handleChange}
					placeholder="Number of the items you bought"
					value={1}
					type="number"
				/>
				<Form.Input
					label="Date"
					name="date"
					onChange={handleChange}
					placeholder="Date"
					type="date"
					value={Date()}
				/>
				<Form.Input
					label="Description"
					name="description"
					onChange={handleChange}
					placeholder="Description"
				/>
			</Form.Group>

			<Form.Button>ADD</Form.Button>
		</Form>
	);
}
