import React from 'react'
import { MyButton } from '../UI_elements/MyButton/MyButton'
import styles from './header.module.css'
export const Header = ({ signUpRef, usersRef }) => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__content}>
					<div>
						<img src="../assets/Logo.svg" alt="" />
					</div>
					<nav className={styles.header__navigation}>
						<MyButton onClick={() => usersRef.current?.scrollIntoView({ behavior: 'smooth' })}>Users</MyButton>
						<MyButton onClick={() => signUpRef.current?.scrollIntoView({ behavior: 'smooth' })}>Sign up</MyButton>
					</nav>
				</div>
			</div>
		</header>
	)
}
