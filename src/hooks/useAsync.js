import { useState, useEffect, useCallback } from "react";

export const useAsync = (asyncFunction, immediate = true, callback,) => {
	const [status, setStatus] = useState("idle");
	const [fetchValue, setFetchValue] = useState(null);
	const [error, setError] = useState(null);
	const execute = useCallback((independecy, secondIndependecy) => {
		setStatus("pending");
		setFetchValue(null);
		setError(null);
		return asyncFunction(independecy, secondIndependecy)
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

	return [fetchValue, status, error, execute, setFetchValue, setError];
};