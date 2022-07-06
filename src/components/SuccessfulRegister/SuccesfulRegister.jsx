import React from 'react'
import { TitleOfSection } from '../TitleOfSection/TitleOfSection'
import { MyButton } from '../UI_elements/MyButton/MyButton'
import styles from './succesfulRegister.module.css'
export const SuccesfulRegister = ({ setSuccess }) => {
	return (
		<div className={styles.success}>
			<TitleOfSection>User successfully registered</TitleOfSection>
			<div className='container'>
				<div className={styles.success__wrapper}>
					<div className={styles.success__image}>
						<img src="./assets/success-image.svg" alt="" />
					</div>
					<MyButton onClick={() => setSuccess(false)}>Register New User</MyButton>
				</div>
			</div>
		</div>
	)
}
