import React, { useState, ChangeEvent, FormEvent } from "react";
import useForm from "../services/hooks/useForm";
import { Transaction as TransactionType } from "../services/types";
import { Container, Form } from "semantic-ui-react";

const Transaction = ({ onSubmit }: { onSubmit: (_: any) => void }) => {
	const { values, handleChange } = useForm();

	const handleSubmit = (e: FormEvent): void => {
		e.preventDefault();
		onSubmit(values as TransactionType);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Input
					label="Total Price"
					name="sum"
					onChange={handleChange}
					placeholder="Sum"
					required
				/>
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
};

export default Transaction;
