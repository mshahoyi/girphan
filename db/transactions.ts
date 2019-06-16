const mongoose = require("mongoose");

const Transaction = mongoose.model(
	"Transaction",
	new mongoose.Schema({
		description: String,
		amount: Number,
		date: Date
	})
);

module.exports = Transaction;
