import React from 'react'
import { MySkeletonLoader } from '../UI_elements/MySkeletonLoader/MyLoader'
import styles from './listOfSkeletons.module.css'

export const ListOfSkeletons = () => {
	return (
		<div className={styles.users__cards}>
			{[...new Array(6)].map((_, i) => <div key={i} className={styles.skeleton__item}><MySkeletonLoader /></div>)}
		</div>
	)
}
