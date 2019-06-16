import { useState } from "react";

export default function useForm(
	submitCallback: any
): {
	values: object;
	handleChange: (_: any) => void;
	handleSubmit: (_: any) => void;
} {
	const [values, setValues] = useState({});

	const handleChange = (e: any) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		submitCallback(values);
	};

	return { values, handleChange, handleSubmit };
}
