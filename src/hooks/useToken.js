import { useState, useCallback, useEffect } from "react";

export const useToken = (asyncFunction, immediate = true) => {
	const [token, setToken] = useState(null);
	const [tokenError, setTokenError] = useState(null);
	const tokenExecute = useCallback(() => {
		setToken(null);
		setTokenError(null);
		return asyncFunction()
			.then((response) => {
				setToken(response);
			})
			.catch((error) => {
				setTokenError(error);
			});
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			tokenExecute();
		}
	}, [tokenExecute, immediate]);
	return { tokenExecute, token, tokenError, setTokenError };
};