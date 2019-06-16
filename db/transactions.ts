import * as mongoose from "mongoose";

const Transaction = mongoose.model(
	"Transaction",
	new mongoose.Schema({
		description: String,
		amount: Number,
		date: Date
	})
);

export default Transaction;
