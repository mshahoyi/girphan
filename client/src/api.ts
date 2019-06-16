import { Transaction } from "./types";
import axios from "axios";

export function postTransaction(
	transaction: Transaction
): Promise<Transaction> {
	return axios.post("/crud", transaction);
}
