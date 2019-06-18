import React, { FormEvent } from "react";
import { Form, Container } from "semantic-ui-react";
import useForm from "../services/hooks/useForm";
import { Purchase, TransactionType } from "../services/types";

interface NewItemComponentProps {
	onSubmit: (purchase: Purchase) => any;
}

export default function NewItem({ onSubmit }: NewItemComponentProps) {
	const { values, handleChange } = useForm({
		date: new Date(),
		quantity: 1
	});

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		values.type = TransactionType.Purchase;
		onSubmit(values);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Input
					label="Item Name"
					name="item"
					onChange={handleChange}
					placeholder="Name of the item(s)"
					required
				/>
				<Form.Group widths="equal">
					<Form.Input
						label="Quantity"
						name="quantity"
						onChange={handleChange}
						placeholder="Number of the items you bought"
						value={values.quantity}
						type="number"
						required
					/>
					<Form.Input
						label="Price per item"
						name="price"
						onChange={handleChange}
						placeholder="Price of one item"
						required
					/>
					<Form.Input
						label="Total Price"
						name="sum"
						onChange={handleChange}
						placeholder="Price of all the items"
						required
					/>
				</Form.Group>
				<Form.Input
					label="Category"
					name="category"
					onChange={handleChange}
					placeholder="Category"
				/>
				<Form.Input
					label="Tag(s)"
					name="tags"
					onChange={handleChange}
					placeholder="Tag(s)"
				/>
				<Form.Input
					label="Description"
					name="description"
					onChange={handleChange}
					placeholder="Description"
				/>
				<Form.Input
					label="Date"
					name="date"
					onChange={handleChange}
					placeholder="Date"
					value={values.date}
					required
				/>

				<Form.Button fluid>ADD</Form.Button>
			</Form>
		</Container>
	);
}
