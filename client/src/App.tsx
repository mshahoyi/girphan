import React from "react";
import Transaction from "./components/transaction";
import { postTransaction } from "./api";
import NewItem from "./components/newItem";

const App: React.FC = () => {
	return (
		<div className="App">
			{/* <Transaction onSubmit={postTransaction} /> */}
			<NewItem onSubmit={values => console.log(values)} />
		</div>
	);
};

export default App;
