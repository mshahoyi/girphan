import React, { useState, ChangeEvent } from "react";
import useForm from "../hooks/useForm";

const Transaction = () => {
	const onSubmit = (e: any) => {
		e.preventDefault();
		console.log(values);
	};

	const { values, handleChange } = useForm();

	return (
		<div>
			<form onSubmit={onSubmit}>
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
				<input type="submit" />
			</form>
		</div>
	);
};

export default Transaction;
