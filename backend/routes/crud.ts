import express from "express";
const router = express.Router();
import Purchase from "../db/purchase";
import { BackendFrontendDataTraffic } from "../../client/src/services/types";

router.post("/", (req: express.Request, res: express.Response) => {
	const purchase = req.body as BackendFrontendDataTraffic;
	new Purchase(purchase).save((err, purchase) => {
		const response: BackendFrontendDataTraffic = {
			e: err,
			data: purchase
		};
		console.log("response to post is", response);
		res.send(response);
	});
});

router.get("/", (req: express.Request, res: express.Response) => {
	Purchase.find((err, result) => {
		const response: BackendFrontendDataTraffic = {
			e: err,
			data: result
		};
		console.log(result);
		res.send(response);
	});
});

module.exports = router;
