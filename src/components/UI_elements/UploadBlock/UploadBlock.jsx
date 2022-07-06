import { Button, Stack } from '@mui/material'
import React from 'react'
import { CssTextFileField } from '../../../utils/createCustomTextFields'
import { getHelperText } from '../../../utils/getHelperText'
import styles from './uploadBlock.module.css'

export const UploadBlock = ({errors, setFile, register}) => {
	return (
		<Stack>
			<div className={styles.upload__wrapper}>
				<label htmlFor="contained-button-file">
					<input style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} accept="image/jpeg"
						id="contained-button-file" type="file" />
					<Button className={!!errors.file ? styles.signup__uploadError : styles.signup__upload} variant="outlined" component="span">
						Upload
					</Button>
				</label>
				<CssTextFileField error={!!errors.file} {...register('file', { required: true, })} helperText={getHelperText(errors?.file?.type)}
					className={styles.signup__input}
					disabled placeholder="Upload your photo" variant="outlined" />
			</div>
		</Stack>
	)
}
