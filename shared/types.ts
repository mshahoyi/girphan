export interface Transaction {
	description?: string;
	sum: number;
	date: Date;
	type: TransactionType;
	category?: string;
	tags?: [string];
}

export interface Purchase {
	item: string;
	quantity: number;
	transaction: Transaction;
	price: number;
}

export enum TransactionType {
	Purchase = 0,
	Sale
}

export interface BackendFrontendDataTraffic {
	e: any;
	data: any;
}
