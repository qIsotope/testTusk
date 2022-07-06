import React from 'react'

import styles from './titleOfSection.module.css'
export const TitleOfSection = ({ children }) => {
	return (
		<div className={styles.title}>
			{children}
		</div>
	)
}
