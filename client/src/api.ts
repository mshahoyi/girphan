import { Transaction, Purchase } from "./types";
import axios from "axios";

export function postTransaction(
	transaction: Transaction
): Promise<Transaction> {
	return axios.post("/crud", transaction);
}

export function postPurchase(purchase: Purchase): Promise<Purchase> {
	return axios.post("/crud", purchase);
}

export function getPurchases(): Promise<Purchase> {
	return axios.get("/crud");
}
