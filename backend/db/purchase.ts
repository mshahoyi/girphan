import * as mongoose from "mongoose";
import Transaction from "./transaction";

const Purchase = Transaction.discriminator(
	"Purchase",
	new mongoose.Schema({
		item: { type: String, required: true },
		quantity: { type: Number, required: true, default: 1 },
		price: { type: Number, required: true }
	})
);

export default Purchase;
