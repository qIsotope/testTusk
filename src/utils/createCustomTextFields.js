import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';



export const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#7E7E7E',
	},
	'& label.Mui-error': {
		color: '#CB3D40;',
		fontSize: '12px',
		lineHeight: '14px'
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#D0CFCF',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#D0CFCF',
		},
		'&.Mui-error fieldset': {
			borderColor: '#CB3D40',
			borderWidth: '2px'
		},
	},
});
export const CssTextFileField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#7E7E7E',
	},
	'& label.Mui-error': {
		color: '#CB3D40;',
		fontSize: '12px',
		lineHeight: '14px'
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#D0CFCF',
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#D0CFCF',
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '',
		},
		'&.Mui-error fieldset': {
			borderColor: '#CB3D40',
			borderWidth: '2px'
		},
	},
});