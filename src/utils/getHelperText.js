export const getHelperText = (type, phone = false) => {
	if (type === 'required') {
		return 'This field is required'
	} else if (type === 'maxLength') {
		return 'Too many characters'
	} else if (type === 'minLength') {
		return 'Too few characters'
	} else if (type === 'pattern' && phone) {
		return 'Please enter a valid phone'
	} else if (type === 'pattern') {
		return 'Please enter a valid email'
	} else if (phone) {
		return '+38 (XXX) XXX - XX - XX'
	}
}