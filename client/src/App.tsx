import React from "react";
import Transaction from "./components/transaction";

const App: React.FC = () => {
	return (
		<div className="App">
			<Transaction
				onSubmit={(values: any) => {
					console.log(values);
				}}
			/>
		</div>
	);
};

export default App;
