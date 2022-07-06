import React from 'react'
import styles from './myButton.module.css'


export const MyButton = (props) => {
	return (
		<button  {...props} className={props.status === 'pending' ? styles.myButton__load : styles.myButton}>{props.children}
			{props.status === 'pending' && <div className={styles.myButton__fetching}><img src="./assets/loading1.gif" alt="" /></div>}
		</button>
	)
}
