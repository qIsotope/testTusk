export const createObj = (file, data, radioValue) => {
	const formData = new FormData();
	formData.append('photo', file);
	formData.append('name', data.name);
	formData.append('phone', data.phone);
	formData.append('email', data.email);
	formData.append('position_id', radioValue)
	return formData
}