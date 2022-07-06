import { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFunction, immediate = true, callback) => {
	const [status, setStatus] = useState("idle");
	const [fetchValue, setFetchValue] = useState(null);
	const [error, setError] = useState(null);
	const execute = useCallback(() => {
		setStatus("pending");
		setFetchValue(null);
		setError(null);
		return asyncFunction()
			.then((response) => {
				setFetchValue(response);
				setStatus("success");
				if (callback) {
					callback(response.data.users)
				}
			})
			.catch((error) => {
				setError(error);
				setStatus("error");
			});
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			execute();
		}
	}, [execute, immediate]);
	return { execute, status, fetchValue, error, setFetchValue };
};