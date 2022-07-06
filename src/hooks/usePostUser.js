import { useState, useCallback } from "react";

export const usePostUser = (asyncFunction) => {
	const [postingResponse, setPostingResponse] = useState(null)
	const [postingStatus, setPostingStatus] = useState("idle");
	const [postingError, setPostingError] = useState(null);
	const postingExecute = useCallback((obj, token) => {
		setPostingStatus("pending");
		setPostingError(null);
		setPostingResponse(null)
		return asyncFunction(obj, token)
			.then((response) => {
				setPostingStatus("success");
				setPostingResponse(response)
			})
			.catch((error) => {
				setPostingError(error);
				setPostingStatus("error");
			});
	}, [asyncFunction]);


	return { postingExecute, postingStatus, postingError, postingResponse, setPostingError };
};