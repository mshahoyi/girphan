import React from "react";
import { postPurchase, getPurchases } from "./api";
import NewItem from "./components/newItem";

const App: React.FC = () => {
	return (
		<div className="App">
			{/* <Transaction onSubmit={postTransaction} /> */}
			<NewItem
				onSubmit={values => {
					postPurchase(values).then(r =>
						getPurchases().then((results: any) => {
							console.log(results);
						})
					);
				}}
			/>
		</div>
	);
};

export default App;
