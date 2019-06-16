import React, { useState, ChangeEvent } from "react";
import useForm from "../hooks/useForm";

const Transaction = ({ onSubmit }: { onSubmit: (_: any) => void }) => {
	const { handleChange, handleSubmit } = useForm(onSubmit);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="description">Description</label>
				<input
					placeholder="Description"
					id="description"
					onChange={handleChange}
					name="description"
				/>
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					placeholder="Sum"
					id="amount"
					onChange={handleChange}
					name="amount"
				/>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					placeholder="Date"
					id="date"
					onChange={handleChange}
					name="date"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Transaction;
