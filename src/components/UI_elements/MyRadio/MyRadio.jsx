import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

import styles from './myRadio.module.css'


export const MyRadio = ({ radioValue, setRadioValue, fetchValue }) => {
	return (
		<FormControl className={styles.signup__radio}>
			<FormLabel className={styles.signup__radioLabel}>Select your position</FormLabel>
			<RadioGroup
				name="radio-buttons-group"
				value={radioValue}
				onChange={(e) => setRadioValue(e.target.value)}
			>
				{fetchValue?.data?.positions.map((pos, i) => <FormControlLabel key={pos.id} className={styles.signup__radioOption}
					value={pos.id} control={<Radio />} label={pos.name}
				/>)}
			</RadioGroup>
		</FormControl>
	)
}
