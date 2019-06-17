export interface Transaction {
	description: string;
	amount: number;
	date: Date;
	type: TransactionType;
	category?: string;
	tag?: string;
}

export interface Item {
	name: string;
	quantity: number;
	transaction: Transaction;
	price: number;
}

export enum TransactionType {
	Buy,
	Sell
}
