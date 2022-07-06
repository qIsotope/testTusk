import React from 'react'
import { TitleOfSection } from '../TitleOfSection/TitleOfSection'
import { MyButton } from '../UI_elements/MyButton/MyButton'
import styles from './mainPage.module.css'

export const MainPage = ({ signUpRef }) => {
	return (
		<main className={styles.main__page}>
			<div className="container">
				<div className={styles.main__pageBlock}>
					<TitleOfSection>
						Test assignment for front-end developer
					</TitleOfSection>
					<article className={styles.main__pageSubtitle}>
						What defines a good front-end developer is one that has
						skilled knowledge of HTML, CSS, JS with a vast
						understanding of User design thinking as they'll be
						building web interfaces with accessibility in mind.
						They should also be excited to learn, as the world of
						Front-End Development keeps evolving.</article>
					<div className={styles.main__pageButton}>
						<MyButton onClick={() => signUpRef.current?.scrollIntoView({ behavior: 'smooth' })}>Sign up</MyButton>
					</div>
				</div>
			</div>
		</main>
	)
}
