import * as mongoose from "mongoose";
import { Transaction } from "../../shared/types";

const transactionSchema = new mongoose.Schema({
	description: { type: String, required: false },
	sum: { type: Number, required: true },
	date: { type: Date, required: true },
	type: { type: Number, required: true },
	category: { type: String, required: false },
	tags: { type: [String], required: true }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
