const router = require("express").Router();
const Transaction = require("../db/transactions.ts");

router.get("/", (req, res) => {
	res.send("hello there");
});

router.post("/", (req, res) => {
	let transaction = req.body;
	console.log(transaction);
	new Transaction(transaction).save((err, trans) => {
		if (err) console.log(err);
		console.log("successfully added the transaction to db");
	});
});

module.exports = router;
