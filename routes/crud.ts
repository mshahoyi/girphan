import express from "express";
const router = express.Router();
import Transaction from "../db/transactions";

router.post("/", (req: express.Request, res: express.Response) => {
	let transaction = req.body;
	console.log(transaction);
	new Transaction(transaction).save((err, trans) => {
		if (err) console.log(err);
		console.log("successfully added the transaction to db");
	});
});

module.exports = router;
