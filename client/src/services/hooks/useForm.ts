import { useState } from "react";

export default function useForm(
	defaultValues: object = {}
): {
	values: any;
	handleChange: (_: any) => void;
} {
	const [values, setValues] = useState(defaultValues);

	const handleChange = (e: any) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return { values, handleChange };
}
