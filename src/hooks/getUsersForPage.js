import { useState, useEffect, useCallback } from "react";

export const useGetUsersForPage = (asyncFunction, independecy, immediate = true) => {
	const [statusForPage, setStatus] = useState("idle");
	const [valueForPage, setValue] = useState(null);
	const [errorForPage, setError] = useState(null);
	const executeForPage = useCallback((independecy) => {
		setStatus("pending");
		setValue(null);
		setError(null);
		return asyncFunction(independecy)
			.then((response) => {
				setStatus("success");
				setValue(response);
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			executeForPage();
		}
	}, [executeForPage, immediate]);
	return { executeForPage, statusForPage, valueForPage, errorForPage, };
};