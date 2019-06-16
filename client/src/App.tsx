import React from "react";
import Transaction from "./components/transaction";
import { postTransaction } from "./api";

const App: React.FC = () => {
	return (
		<div className="App">
			<Transaction onSubmit={postTransaction} />
		</div>
	);
};

export default App;
